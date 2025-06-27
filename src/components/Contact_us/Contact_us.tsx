import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Contact_us.css';
import mailIcon from './mailicon.png';
import phoneIcon from './teleicon.png';
import addressIcon from './adressicon.png';
import facebookIcon from '../../images/facebook.png';
import instagramIcon from '../../images/instagram.png';
import whatsappIcon from '../../images/whatsapp.png';

// Use Vite env variable for the API key
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Responsive hook
function useResponsiveMapHeight() {
  const [height, setHeight] = useState(554);

  useEffect(() => {
    function updateHeight() {
      if (window.innerWidth <= 480) {
        setHeight(400);
      } else if (window.innerWidth <= 768) {
        setHeight(390);
      } else {
        setHeight(554);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return height;
}

const Contact_us: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [googleMapsObj, setGoogleMapsObj] = useState<any>(null);

  // Animation on scroll effect
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.contact-card, .form-layout, .social-links, .map-container');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any existing messages when user starts typing
    if (formMessage) {
      setFormMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormMessage(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, always show success
      setFormMessage({
        type: 'success',
        text: 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      console.log('Form submitted:', formData);
    } catch (error) {
      setFormMessage({
        type: 'error',
        text: 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setIsFormSubmitting(false);
    }
  };

  const mapHeight = useResponsiveMapHeight();
  const mapContainerStyle = useMemo(() => ({
    width: '100%',
    height: `${mapHeight}px`,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  }), [mapHeight]);

  const center = {
    lat: 33.5731,  // Casablanca coordinates
    lng: -7.5898
  };

  // Only include supported libraries
  const libraries: ('places' | 'drawing' | 'geometry')[] = ['places'];

  const handleMapLoad = () => {
    setMapLoaded(true);
    console.log('Map loaded successfully');
  };

  const handleMapError = (error: any) => {
    console.error('Map loading error:', error);
    setMapError('Failed to load map. Please check your API key and internet connection.');
  };

  const handleGoogleMapLoad = (map: google.maps.Map) => {
    setMapLoaded(true);
    setGoogleMapsObj(window.google);
    console.log('Map loaded successfully');
  };

  // Contact methods data
  const contactMethods = [
    {
      icon: mailIcon,
      title: 'Email',
      details: ['elise.beguin@orange.fr', 'umpaparrainages@live.fr'],
      highlight: false
    },
    {
      icon: phoneIcon,
      title: 'Téléphone',
      details: ['0611532242', '061934242'],
      highlight: true
    },
    {
      icon: addressIcon,
      title: "L'adresse",
      details: ['P3011 Route de Bouskoura, Casablanca 21000'],
      highlight: false
    }
  ];

  // Social media data
  const socialLinks = [
    {
      platform: 'instagram',
      icon: instagramIcon,
      url: '#',
      label: 'Instagram'
    },
    {
      platform: 'facebook',
      icon: facebookIcon,
      url: '#',
      label: 'Facebook'
    },
    {
      platform: 'whatsapp',
      icon: whatsappIcon,
      url: '#',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className="contact-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section-contact ">
        <div className="hero-container-contact">
          <h1 className="hero-title-contact">Contact</h1>
          <p>Nous sommes là pour vous accompagner</p>
        </div>
      </section>

      {/* Enhanced Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <h2 className="section-title">Contactez-nous facilement</h2>
          <div className="contact-cards">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`contact-card ${method.highlight ? 'highlight' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon">
                  <span>
                    <img 
                      src={method.icon} 
                      alt={method.title} 
                      style={{width: '48px', height: '48px'}} 
                    />
                  </span>
                </div>
                <h3>{method.title}</h3>
                {method.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-layout">
            <div className="form-intro">
              <h2>Vous avez une question, une suggestion ou besoin d'informations ?</h2>
              <p>Notre équipe est à votre écoute et se fera un plaisir de vous répondre dans les plus brefs délais.</p>
            </div>
            
            <div className="form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Prénom *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isFormSubmitting}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Nom *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isFormSubmitting}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isFormSubmitting}
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isFormSubmitting}
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isFormSubmitting}
                    placeholder="Décrivez-nous votre demande ou partagez vos questions..."
                  ></textarea>
                </div>

                {/* Form Message */}
                {formMessage && (
                  <div style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    backgroundColor: formMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: formMessage.type === 'success' ? '#155724' : '#721c24',
                    border: `1px solid ${formMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                    marginBottom: '1rem'
                  }}>
                    {formMessage.text}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isFormSubmitting}
                  style={{
                    opacity: isFormSubmitting ? 0.7 : 1,
                    cursor: isFormSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isFormSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Media Section */}
      <section className="social-section">
        <div className="container">
          <h2 className="section-title">Retrouvez-nous aussi ici</h2>
          <p className="section-subtitle">Rejoignez notre communauté et suivez nos actions au quotidien</p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className={`social-link ${social.platform}`}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img 
                    src={social.icon} 
                    alt={social.label} 
                    style={{width: '48px', height: '48px'}} 
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Location Section */}
      <section className="location-section">
        <div className="container">
          <h2 className="section-title">Notre refuge vous ouvre ses portes</h2>
          <p className="section-subtitle">Découvrez notre emplacement et venez nous rendre visite</p>
          <div className="map-container">
            {GOOGLE_MAPS_API_KEY ? (
              <div style={{ flex: '2 1 400px', minHeight: '400px' }}>
                <LoadScript
                  googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                  libraries={libraries}
                  onLoad={handleMapLoad}
                  onError={handleMapError}
                >
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={{
                      zoomControl: true,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: true,
                      styles: [
                        {
                          featureType: "poi",
                          elementType: "labels",
                          stylers: [{ visibility: "off" }]
                        }
                      ]
                    }}
                    onLoad={handleGoogleMapLoad}
                  >
                    <Marker 
                      position={center}
                      title="UMPA Refuge"
                      {...(googleMapsObj && {
                        icon: {
                          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="20" cy="20" r="18" fill="#E57B51" stroke="white" stroke-width="4"/>
                              <text x="20" y="26" text-anchor="middle" fill="white" font-size="16" font-weight="bold">🏠</text>
                            </svg>
                          `),
                          scaledSize: new googleMapsObj.maps.Size(40, 40),
                        }
                      })}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            ) : (
              <div style={{
                ...mapContainerStyle,
                flex: '2 1 400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa',
                border: '2px dashed #dee2e6',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
                <h3 style={{ color: '#666', marginBottom: '1rem' }}>Carte non disponible</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  Clé API Google Maps manquante
                </p>
                <p style={{ fontSize: '0.9rem', color: '#999' }}>
                  Variable attendue: VITE_GOOGLE_MAPS_API_KEY
                </p>
              </div>
            )}
            
            <div className="map-info">
              <h3>📍 UMPA Refuge</h3>
              <p><strong>Adresse :</strong></p>
              <p>P3011 Route de Bouskoura</p>
              <p>Casablanca 21000, Maroc</p>
              
              <div style={{ 
                margin: '1.5rem 0', 
                padding: '1rem', 
                backgroundColor: 'rgba(229, 123, 81, 0.1)', 
                borderRadius: '12px',
                border: '1px solid rgba(229, 123, 81, 0.2)'
              }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#E57B51', fontWeight: '600' }}>
                  🕒 Horaires de visite
                </p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Lundi - Vendredi: 9h00 - 17h00<br />
                  Samedi: 9h00 - 14h00
                </p>
              </div>
              
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="directions-btn"
              >
                📍 Obtenir l'itinéraire
              </a>
            </div>
          </div>

          {mapError && (
            <div style={{
              padding: '1rem',
              backgroundColor: '#fee',
              border: '1px solid #fcc',
              borderRadius: '12px',
              marginTop: '1rem',
              color: '#c33',
              textAlign: 'center'
            }}>
              ⚠️ {mapError}
            </div>
          )}
        </div>
      </section>
      
    </div>
  );
};

export default Contact_us;