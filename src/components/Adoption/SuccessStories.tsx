import { useState, useEffect } from 'react';
import './SuccessStories.css';

interface Story {
  id: number;
  title: string;
  content: string;
  image: string;
}

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories: Story[] = [
    {
      id: 1,
      title: "L'histoire de Max et Sarah",
      content: "Après des mois de recherche, Sarah a trouvé Max dans notre refuge. Aujourd'hui, ils sont inséparables et partagent de magnifiques aventures ensemble.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Luna trouve sa famille",
      content: "Luna était timide quand elle est arrivée chez nous. Maintenant, elle s'épanouit dans sa nouvelle famille avec deux enfants qui l'adorent.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Le bonheur de Bella",
      content: "Bella a trouvé des maîtres passionnés de randonnée. Elle explore maintenant les montagnes chaque week-end avec sa nouvelle famille.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [stories.length]);

  return (
    <section className="success-stories-section">
      <div className="container">
        <div className="header">
          <h2 className="title">
            Histoires de Bonheur
          </h2>
          <div className="underline"></div>
          <p className="subtitle">
            Découvrez les magnifiques histoires d'adoption qui nous réchauffent le cœur chaque jour.
          </p>
        </div>

        <div className="story-card">
          <div className="story-container">
            {/* Text Content */}
            <div className="content-container">
              <h3 className="story-title">
                {stories[currentStory].title}
              </h3>
              <blockquote className="story-content">
                "{stories[currentStory].content}"
              </blockquote>
              
              <div className="navigation">
                <button 
                  onClick={() => setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)}
                  className="nav-button"
                  aria-label="Previous story"
                >
                  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="indicators">
                  <div className="indicator-container">
                    {stories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStory(idx)}
                        className={`indicator ${currentStory === idx ? 'active' : ''}`}
                        aria-label={`Go to story ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setCurrentStory((prev) => (prev + 1) % stories.length)}
                  className="nav-button"
                  aria-label="Next story"
                >
                  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Image Container */}
            <div className="image-container">
              <img 
                src={stories[currentStory].image} 
                alt={`Success story - ${stories[currentStory].title}`}
                className="story-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;