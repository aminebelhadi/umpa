import { useEffect, useState } from 'react';
import PetCard from './PetCard';
import { fetchAnimalsForAdoption, AnimalDTO } from '../../api/animalApi';
import './PetGrid.css';
import PetCardSkeleton from '../../skeletons/PetCardSkeleton';

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: string;
  image: string;
  description: string;
  especeId: string;
  raceId: string;
  sexe: string;
  dateNaissance?: string; 
}

interface PetGridProps {
  filters: {
    especeId?: string;
    age?: number;
    sexe?: string;
    raceId?: string;
  };
}

const staticPets: Pet[] = [
  {
    id: "1",
    name: "Milo",
    breed: "Labrador",
    age: 2,
    gender: "Mâle",
    image: "https://placedog.net/400/300?id=1",
    description: "Un chien joueur et affectueux.",
    especeId: "Chien",
    raceId: "Labrador",
    sexe: "MALE",
    dateNaissance: "2023-01-15",
  },
  {
    id: "2",
    name: "Luna",
    breed: "Chartreux",
    age: 3,
    gender: "Femelle",
    image: "https://placedog.net/400/300?id=2",
    description: "Une chatte douce et calme.",
    especeId: "Chat",
    raceId: "Chartreux",
    sexe: "FEMALLE",
    dateNaissance: "2022-03-10",
  },
  {
    id: "3",
    name: "Rocky",
    breed: "Berger Allemand",
    age: 4,
    gender: "Mâle",
    image: "https://placedog.net/400/300?id=3",
    description: "Protecteur et fidèle.",
    especeId: "Chien",
    raceId: "Berger Allemand",
    sexe: "MALE",
    dateNaissance: "2021-06-20",
  }
];



const PetGrid = ({ filters }: PetGridProps) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  // Remplace l'appel API par les animaux statiques
  setLoading(true);
  setError(null);

  // Application des filtres sur les animaux statiques
  let filtered = staticPets;
  if (filters.especeId) filtered = filtered.filter(p => p.especeId === filters.especeId);
  if (filters.raceId) filtered = filtered.filter(p => p.raceId === filters.raceId);
  if (filters.age !== undefined) filtered = filtered.filter(p => p.age === filters.age);
  if (filters.sexe) filtered = filtered.filter(p => p.sexe === filters.sexe);

  setPets(filtered);
  setVisibleCount(3);
  setLoading(false);
}, [filters]);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, pets.length));
  };


  return (
    <section className="pet-grid-section">
      <div className="decorative-elements">
        <div className="top-decoration"></div>
        <div className="bottom-decoration"></div>
      </div>

      <div className="container">
        <div className="title-container">
          <div className="title-wrapper">
            <h2 className="title">Nos Adorables Compagnons</h2>
            <div className="title-underline"></div>
          </div>

          <p className="subtitle">
            Chaque animal a sa propre personnalité et histoire. Découvrez ces merveilleux compagnons qui cherchent une famille aimante.
          </p>
        </div>

        {loading && (
          <div className="pet-grid">
            <PetCardSkeleton />
            <PetCardSkeleton />
            <PetCardSkeleton />
          </div>
        )}

        {error && <p className="error">{error}</p>}

        {!loading && !error && pets.length > 0 && (
  <div className="pet-grid">
    {pets.slice(0, visibleCount).map((pet, index) => (
      <PetCard key={pet.id} pet={pet} delay={index * 100} />
    ))}
  </div>
)}

{!loading && !error && pets.length > 3 && visibleCount < pets.length && (
  <div className="button-container">
    <button
      className="view-more-button cursor-pointer"
      onClick={() => setVisibleCount(pets.length)}
    >
      <span className="button-content">
        Voir Plus d'Animaux
      </span>
      <span className="button-hover-effect"></span>
    </button>
  </div>
)}

      </div>
    </section>
  );
};

export default PetGrid;
