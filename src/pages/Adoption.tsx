import { useState } from 'react';
import HeroSection from '../components/Adoption/HeroSection';
import PetGrid from '../components/Adoption/PetGrid';
import SuccessStories from '../components/Adoption/SuccessStories';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Adoption = () => {
  const [filters, setFilters] = useState<{ type?: string; age?: number }>({});

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <HeroSection onSearch={setFilters} />
        <PetGrid filters={filters} />
        <SuccessStories />
      </div>
      <Footer />
    </>
  );
};

export default Adoption;
