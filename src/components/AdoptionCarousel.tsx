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

const MOBILE_BREAKPOINT = 900;

const AdoptionCarousel = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    setPets(staticPets);
    // Responsive listener
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CARD_WIDTH = 280;
  const CARD_GAP = 80;
  const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;

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
      {isMobile ? (
        <div style={{ overflowX: "auto", width: "100%" }}>
          <motion.div
            className="flex gap-15 align-middle px-4"
            style={{ cursor: "grab", minWidth: pets.length * CARD_WIDTH }}
            drag="x"
            dragConstraints={{
              left: -((pets.length * TOTAL_CARD_WIDTH) - window.innerWidth + 32),
              right: 0
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            {pets.map((pet, index) => (
              <div
                key={pet.id}
                className="snap-center flex-shrink-0"
                style={{ minWidth: CARD_WIDTH, maxWidth: 320, touchAction: "pan-y" }}
              >
                <PetCard pet={pet} delay={index * 100} />
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="w-full flex justify-center gap-15 align-middle px-4">
          {pets.slice(0, 3).map((pet, index) => (
            <div
              key={pet.id}
              className="snap-center flex-shrink-0"
              style={{ minWidth: CARD_WIDTH, maxWidth: 320 }}
            >
              <PetCard pet={pet} delay={index * 100} />
            </div>
          ))}
        </div>
      )}
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
