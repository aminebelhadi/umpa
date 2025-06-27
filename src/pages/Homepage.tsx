import AboutUs from '../components/AboutUs';
import AdoptionCarousel from '../components/AdoptionCarousel';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import React from 'react';
import Statistiques from '../components/Statistiques';
import ObjectifsSection from '../components/ObjectifsSection';
import NosAnimauxSection from '../components/NosAnimauxSection';
import CommentAiderSection from '../components/CommentAiderSection';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';


const HomePage = () => {

    const [heroSection, setheroSection] = React.useState(true)
    const [showRightPart, setShowRightPart] = React.useState(false)

    React.useEffect(() => {
        const handleResize = () => {
          window.innerWidth < 1024 ? setShowRightPart(false) : setShowRightPart(true);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      

    return (
      <div className='w-[100%]'>
        <Header />
        <HeroSection />
        <AdoptionCarousel />
        <AboutUs />
        <Statistiques />
        <ObjectifsSection />
        <NosAnimauxSection />
        <CommentAiderSection />
        <Galerie />
        <Footer />
      </div>
    );
  };
  export default HomePage;