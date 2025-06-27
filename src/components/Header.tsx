import { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png"
import burgerIcon from "../images/hamburger.png"
import { Link } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowHeader(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on navigation
  const handleNavClick = () => setMenuOpen(false);

  

  return (
    <header
      className={`bg-[#F7B399] px-4 py-3 sticky top-0 transition-transform duration-300 z-11 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navigationContainer">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center logoParent">
            <img
              src={logo}
              alt="Logo"
              className="h-15 w-auto logo"
            />
          </a>

          {/* Hamburger Button */}
          <img
            src={burgerIcon}
            className="w-auto h-11 cursor-pointer md:hidden"
            onClick={() => setMenuOpen(true)}
            alt="Menu"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center gap-6">
            <Link to={"/"} className="text-white block py-2 md:py-0">Accueil</Link>
            <Link to={"/adoption"} className="text-white block py-2 md:py-0">Adopter</Link>
            <Link to={"/blog"} className="text-white block py-2 md:py-0">Blog</Link>
            <Link to={"/QuiSommeNous"} className="text-white block py-2 md:py-0">Qui somme nous</Link>
            <Link to={"/contactez_nous"} className="text-white block py-2 md:py-0">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div>
        {/* Overlay */}
        <div
        className={`mobile-sidebar-overlay${menuOpen ? '' : ' hidden'}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div className={`mobile-sidebar${menuOpen ? ' open' : ''}`}>
        <button
    className="close-btn"
    onClick={() => setMenuOpen(false)}
    aria-label="Close menu"
  >
    &times;
  </button>
  <nav className="flex flex-col gap-6">
    <Link to={"/"} className="text-white text-lg" onClick={handleNavClick}>Accueil</Link>
    <Link to={"/adoption"} className="text-white text-lg" onClick={handleNavClick}>Adopter</Link>
    <Link to={"/blog"} className="text-white text-lg" onClick={handleNavClick}>Blog</Link>
    <Link to={"/QuiSommeNous"} className="text-white text-lg" onClick={handleNavClick}>Qui somme nous</Link>
    <Link to={"/contactez_nous"} className="text-white text-lg" onClick={handleNavClick}>Contact</Link>
  </nav>
</div>
      </div>
    </header>
  );
};

export default Header;