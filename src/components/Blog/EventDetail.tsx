import { Link, useLocation } from "react-router-dom";
import './BlogPage.css';
import Header from '../Header';
import Footer from '../Footer';

const EventDetail: React.FC = () => {
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#E57B51' }}>Données non disponibles.</p>
        <Link to="/blog" className="cta-button" style={{ marginTop: 24, display: 'inline-block' }}>
          ← Retour aux actualités
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Header />
      {/* Héro de l'événement */}
      <section className="blog-hero" style={{ minHeight: '35vh', padding: '90px 0 40px 0', marginBottom: 0 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 style={{ marginBottom: 18 }}>{event.title}</h1>
        </div>
      </section>

      {/* Détail de l'événement, même design que BlogPostDetail */}
      <div className="container" style={{ maxWidth: 900, marginTop: -70, marginBottom: 60 }}>
        {/* Image principale */}
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            width: '100%',
            height: 340,
            backgroundImage: `url(${event.imageUrl || '/images/events/default-event.jpg'})`,
            backgroundColor: '#f0f0f0',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 24,
            marginBottom: 24,
          }}
        />
        {/* Métadonnées */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24,
          padding: '0 6px',
        }}>
          <span className="category-badge">Événement</span>
          <span style={{ color: '#E57B51', fontWeight: 600, fontSize: '1rem' }}>
            {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        {/* Contenu de l'événement */}
        <article
          style={{
            fontSize: '1.13rem',
            color: '#444',
            lineHeight: 1.7,
            background: 'rgba(255,255,255,0.98)',
            borderRadius: 18,
            padding: '36px 36px 40px',
            boxShadow: '0 4px 24px rgba(229, 123, 81, 0.07)',
            minHeight: 200,
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <strong>Lieu :</strong> {event.location}
          </div>
          <div>
            {event.description}
          </div>
        </article>
        {/* Retour aux actualités */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/blog" className="cta-button">
            ← Retour aux actualités
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;