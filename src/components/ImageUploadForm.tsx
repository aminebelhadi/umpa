// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUploadForm: React.FC = () => {
//     const [id, setId] = useState('');
//     const [animalId, setAnimalId] = useState('');
//     const [file, setFile] = useState<File | null>(null);
//     const [uploadStatus, setUploadStatus] = useState('');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!file) {
//             setUploadStatus('Veuillez sélectionner un fichier image.');
//             return;
//         }

//         const image = { id, animalId };

//         const formData = new FormData();
//         // Partie JSON bien formatée
//         formData.append('image', new Blob([JSON.stringify(image)], { type: 'application/json' }), 'image.json');
//         formData.append('file', file);

//         try {
//             const response = await axios.post('http://localhost:8080/umpa/api/v1/image/upload-image', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setUploadStatus(`Image uploadée avec succès : ${response.data}`);
//         } catch (error: any) {
//             if (error.response) {
//                 setUploadStatus(`Erreur: ${error.response.data}`);
//             } else {
//                 setUploadStatus('Erreur inconnue lors de l\'upload.');
//             }
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
//             <h2 className="text-xl font-bold mb-4">Uploader une image</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block mb-1 font-medium">ID de l'image</label>
//                     <input
//                         type="text"
//                         value={id}
//                         onChange={(e) => setId(e.target.value)}
//                         className="w-full border p-2 rounded"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block mb-1 font-medium">ID de l'animal</label>
//                     <input
//                         type="text"
//                         value={animalId}
//                         onChange={(e) => setAnimalId(e.target.value)}
//                         className="w-full border p-2 rounded"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block mb-1 font-medium">Sélectionner une image</label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setFile(e.target.files?.[0] || null)}
//                         className="w-full"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//                     Uploader
//                 </button>
//             </form>
//             {uploadStatus && <p className="mt-4 text-center">{uploadStatus}</p>}
//         </div>
//     );
// };

// export default ImageUploadForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// const BlogPostForm: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [excerpt, setExcerpt] = useState('');
//   const [content, setContent] = useState('');
//   const [date, setDate] = useState('');
//   const [category, setCategory] = useState('');
//   const [featured, setFeatured] = useState(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title || !content || !date) {
//       setStatus('Veuillez remplir les champs obligatoires (titre, contenu, date).');
//       return;
//     }

//     const blogPost = {
//       title,
//       excerpt,
//       content,
//       date,
//       category,
//       featured,
//     };

//     const formData = new FormData();
//     formData.append('blog', new Blob([JSON.stringify(blogPost)], { type: 'application/json' }), 'blogPost.json');

//     if (file) {
//       formData.append('file', file);
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/umpa/api/v1/blog', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setStatus('BlogPost créé avec succès !');
//       // Reset form si besoin
//       setTitle('');
//       setExcerpt('');
//       setContent('');
//       setDate('');
//       setCategory('');
//       setFeatured(false);
//       setFile(null);
//     } catch (error: any) {
//       if (error.response) {
//         setStatus(`Erreur: ${error.response.data}`);
//       } else {
//         setStatus('Erreur inconnue lors de la création du blog post.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Créer un BlogPost</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium">Titre *</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Résumé</label>
//           <textarea
//             value={excerpt}
//             onChange={(e) => setExcerpt(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Contenu *</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Date *</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Catégorie</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>
//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             checked={featured}
//             onChange={(e) => setFeatured(e.target.checked)}
//             id="featured"
//           />
//           <label htmlFor="featured" className="font-medium">À la une</label>
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files?.[0] || null)}
//             className="w-full"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Créer le BlogPost
//         </button>
//       </form>
//       {status && <p className="mt-4 text-center">{status}</p>}
//     </div>
//   );
// };

// export default BlogPostForm;

import React, { useState } from 'react';
import axios from 'axios';

const EventBlogForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !date || !location) {
      setStatus('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const eventBlog = {
      title,
      description,
      date,
      location,
    };

    const formData = new FormData();
    formData.append('eventBlog', new Blob([JSON.stringify(eventBlog)], { type: 'application/json' }));

    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:8080/umpa/api/v1/eventblog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setStatus('Événement créé avec succès !');

      // Reset du formulaire
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
      setFile(null);
    } catch (error: any) {
      if (error.response) {
        setStatus(`Erreur: ${error.response.data}`);
      } else {
        setStatus('Erreur inconnue lors de la création de l\'événement.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Créer un Événement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Titre *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Date *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Lieu *</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Image (optionnelle)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Créer l'Événement
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default EventBlogForm;
