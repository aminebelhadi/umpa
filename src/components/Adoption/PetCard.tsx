import  { useState, useEffect, useRef } from 'react';
import "./CardforAdo.css";
import { Link } from "react-router-dom";

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: string;
  image: string;
  description: string;
  especeId: string; 
  dateNaissance?: string; 
}

interface PetCardProps {
  pet: Pet;
  delay?: number;
}

const PetCard = ({ pet }: PetCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  if(isVisible){}
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
  <div className="petCardModern" ref={cardRef}>
    <div className="petImageSection">
      <img src={pet.image} alt={pet.name} />
    </div>
    <div className="petInfoSection">
      <h2 className="petName">{pet.name}</h2>
      <div className="petDetails">
        <div><strong>Espèce :</strong> {pet.especeId || "N/A"}</div>
        <div><strong>Race :</strong> {pet.breed}</div>
        <div><strong>Sexe :</strong> {pet.gender}</div>
        <div>
          <strong>Date de naissance :</strong>{" "}
          {pet.dateNaissance ? new Date(pet.dateNaissance).toLocaleDateString() : "N/A"}
        </div>
      </div>
      <div className="petCardActions">
        <Link to={`/single_animal_page`} state={{ pet }} className="cta-circle-modern">
          <span>Voir plus</span>
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);
}
export default PetCard;