import { useEffect, useState } from "react";
import arrowToRight from "../images/fleche-pointant-vers-la-droite (1).png";
import { motion } from "framer-motion";
import VoirPlusLink from "./VoirPlusLink";
import PetCard from "./Adoption/PetCard";

interface Pet {
  id: string; 
  name: string;
  breed: string;
  age: number;
  gender: string;
  image: string;
  description: string;
  especeId: string
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
    especeId: "chien"
  },
  {
    id: "2",
    name: "Luna",
    breed: "Chartreux",
    age: 3,
    gender: "Femelle",
    image: "https://placedog.net/400/300?id=2",
    description: "Une chatte douce et calme.",
    especeId: "chien"
  },
  {
    id: "3",
    name: "Rocky",
    breed: "Berger Allemand",
    age: 4,
    gender: "Mâle",
    image: "https://placedog.net/400/300?id=3",
    description: "Protecteur et fidèle.",
    especeId: "chien"
  },
];

const AdoptionCarousel = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    // Pour la démo, on utilise les animaux statiques
    setPets(staticPets);
  }, []);

  console.log("AdoptionCarousel pets:", pets);
  return (
  <>
    <motion.h2
      className="Title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      Animaux pour l'adoption
    </motion.h2>
    <motion.div
      className="w-full flex justify-center gap-15 align-middle overflow-hidden px-4"
      style={{ cursor: "grab" }}
      drag="x"
      dragConstraints={{ left: -((pets.length - 1) * 320), right: 0 }}
      whileTap={{ cursor: "grabbing" }}
    >
      {pets.map((pet, index) => (
        <div
          key={pet.id}
          className="snap-center flex-shrink-0"
          style={{ minWidth: 280, maxWidth: 320 }}
        >
          <PetCard pet={pet} delay={index * 100} />
        </div>
      ))}
    </motion.div>
    <VoirPlusLink
      to="/adoption"
      text="Voir plus"
      icon={arrowToRight}
      className="AdoptionCarousel_voirPlusContainer"
    />
  </>
);
};

export default AdoptionCarousel;
