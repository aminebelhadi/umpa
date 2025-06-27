import arrow from '../../images/ArrowDown.png';
import '../../miniFramework.css';
import './HeroSection.css';



const HeroSection = () => {
  // Scroll to next section
  const handleScroll = () => {
    const nextSection = document.getElementById("GeneralInfo");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="qs-hero-bg">

      {/* Left content */}
      <div className='qs-hero-content'>
          <h1 className="qs-hero-title">
            Qui Sommes nous
          </h1>
          <p className="qs-hero-subtitle">
            Découvrez notre histoire, nos valeurs, notre mission et l'équipe passionnée qui œuvre chaque jour pour la protection et le bien-être des animaux.
          </p>
      </div>
      <div className="qs-hero-scroll-btn-wrapper">
        <button
          onClick={handleScroll}
          className="qs-hero-scroll-btn"
          aria-label="Aller à la section suivante"
        >
          <img src={arrow} className="w-5 h-6" />
        </button>
      </div>
    </div>

  )
}

export default HeroSection;