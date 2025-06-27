import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import {BlogPostDTO } from '../../api/BlogApi';
import {EventBlogDTO } from '../../api/eventBlogApi';
import EventCardSkeleton from '../../skeletons/EventCardSkeleton';
import FeaturedCardSkeleton from '../../skeletons/FeaturedCardSkeleton';
import NotFound from './notFound';

const adoptionTips = [
  "Visitez le refuge plusieurs fois avant de prendre une décision",
  "Tenez compte de votre mode de vie pour choisir la race",
  "Préparez-vous à une période d'adaptation (règle des 3-3-3)",
  "Prévoyez un budget pour les soins vétérinaires et les fournitures",
  "Sécurisez votre maison avant l'arrivée du chien",
  "Patience et constance sont les clés du succès"
];



const staticBlogPosts: BlogPostDTO[] = [
  {
    id: "1",
    title: "Comment bien préparer l’arrivée d’un chien adopté ?",
    excerpt: "Découvrez les étapes clés pour accueillir sereinement votre nouveau compagnon à quatre pattes.",
    imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    category: "Conseils d'adoption",
    date: "2024-06-01",
    featured: true,
    content: "Contenu complet de l'article...",
  },
  {
    id: "2",
    title: "L’histoire touchante de Bella, adoptée à 10 ans",
    excerpt: "Bella a trouvé une famille aimante après des années d’attente au refuge.",
    imageUrl: "https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=crop&w=400&q=80",
    category: "Histoires de réussite",
    date: "2024-05-20",
    featured: false,
    content: "Contenu complet de l'article...",
  },
  {
    id: "3",
    title: "5 astuces pour éduquer un chien adulte",
    excerpt: "L’éducation n’est pas réservée aux chiots ! Voici comment progresser avec un chien adulte.",
    imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80",
    category: "Éducation",
    date: "2024-05-10",
    featured: true,
    content: "Contenu complet de l'article...",
  },
];

const staticEvents: EventBlogDTO[] = [
  {
    id: "e1",
    title: "Journée portes ouvertes",
    description: "Venez rencontrer nos pensionnaires et l’équipe du refuge !",
    date: "2024-07-15",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    location: "Refuge de Paris",
  },
  {
    id: "e2",
    title: "Marche solidaire pour les animaux",
    description: "Participez à notre marche annuelle pour soutenir la cause animale.",
    date: "2024-08-10",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    location: "Bois de Vincennes",
  },
];

const BlogPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState<BlogPostDTO[]>([]);
  const [events, setEvents] = useState<EventBlogDTO[]>([]);
  const [isEventsLoading, setIsEventsLoading] = useState(true);

  useEffect(() => {
    // --- Utilisation des données statiques pour la démo ---
    setBlogPosts(staticBlogPosts);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // --- Utilisation des données statiques pour la démo ---
    setEvents(staticEvents);
    setIsEventsLoading(false);
  }, []);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('fr-FR', { month: 'short' });
    return { day, month };
  };
  if (!isLoading && !isEventsLoading && blogPosts.length === 0 && events.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="blog-page">
      {/* Section Héro */}
      <section className="blog-hero">
        <div className="container">
          <h1>Blog & Actualités</h1>
          <p>
            Votre source de confiance pour des conseils d'adoption, astuces d'éducation, 
            histoires touchantes de réussite canine et toutes les actualités de notre refuge
          </p>
        </div>
      </section>

      {/* Section Événements */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Actualités & Événements du Refuge</h2>
            <p className="section-subtitle">
              Découvrez nos prochains événements, participez à nos actions et restez informé de l'actualité du refuge
            </p>
          </div>
          <div className="events-grid">
            {isEventsLoading ? (
              <>
                <EventCardSkeleton />
                <EventCardSkeleton />
                <EventCardSkeleton />
              </>
            ) : (
              events.map(event => {
                const { day, month } = formatEventDate(event.date);
                return (
                  <article key={event.id} className="event-card">
                    <div className="event-date">
                      <span className="day">{day}</span>
                      <span className="month">{month}</span>
                    </div>
                    <div 
                      className="event-image" 
                      style={{ 
                        backgroundImage: `url(${event.imageUrl || '/images/events/default-event.jpg'})`,
                        backgroundColor: '#f0f0f0'
                      }}
                    ></div>
                    <div className="event-content">
                      <span className="event-type">Événement</span>
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <div className="event-location">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                      <Link to={`/events/${event.id}`} state={{ event }} className="event-cta">
                        Voir l'événement →
                      </Link>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="container blog-container">
        <main className="blog-main">
          {/* Articles à la une */}
          <section className="featured-posts">
            <div className="section-header">
              <h2 className="section-title">À la une</h2>
              <p className="section-subtitle">
                Nos articles les plus populaires et les dernières nouveautés du monde canin
              </p>
            </div>
            <div className="featured-grid">
              {isLoading ? (
                <>
                  <FeaturedCardSkeleton />
                  <FeaturedCardSkeleton />
                  <FeaturedCardSkeleton />
                </>
              ) : (
                featuredPosts.map(post => (
                  <article key={post.id} className="featured-card">
                    <div 
                      className="featured-image" 
                      style={{ 
                        backgroundImage: `url(${post.imageUrl})`,
                        backgroundColor: '#f0f0f0'
                      }}
                    ></div>
                    <div className="featured-content">
                      <span className="category-badge">{post.category}</span>
                      <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                      <p>{post.excerpt}</p>
                      <div className="post-meta">
                        <span>📅 {post.date}</span>
                        <Link to={`/blog/${post.id}`} state={{ post }} className="read-more">
                          Lire la suite →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        </main>

        <aside className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>💡 Conseils d'adoption</h3>
            <ul className="tips-list">
              {adoptionTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="sidebar-widget">
            <h3>📊 Statistiques du refuge</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(229, 123, 81, 0.1)' }}>
                <span>🐕 Chiens adoptés cette année</span>
                <strong style={{ color: '#E57B51' }}>127</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(229, 123, 81, 0.1)' }}>
                <span>🏠 Chiens en attente d'adoption</span>
                <strong style={{ color: '#E57B51' }}>23</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                <span>❤️ Familles heureuses</span>
                <strong style={{ color: '#E57B51' }}>127</strong>
              </div>
            </div>
          </div>

          <div className="sidebar-widget cta-widget">
            <h3>🐾 Prêt à adopter ?</h3>
            <p>Trouvez votre compagnon idéal dès aujourd'hui et changez une vie à jamais</p>
            <Link to="/adoption" className="cta-button">
              Voir nos chiens à l'adoption
            </Link>
          </div>

          <div className="sidebar-widget cta-widget" style={{ background: 'linear-gradient(135deg, #91695A 0%, #6d4c41 100%)' }}>
            <h3>💝 Soutenez notre mission</h3>
            <p>Chaque don nous aide à sauver plus de vies et à offrir de meilleurs soins</p>
            <Link to="/donate" className="cta-button">
              Faire un don
            </Link>
          </div>
        </aside>
      </div>

      {/* Articles récents */}
      <section className="recent-posts">
        <div className="section-header">
          <h2 className="section-title">Articles récents</h2>
          <p className="section-subtitle">
            Découvrez nos derniers conseils et histoires inspirantes
          </p>
        </div>
        <div className="posts-grid">
          {isLoading ? (
            <p>Chargement des articles...</p>
          ) : (
            recentPosts.map(post => (
              <article key={post.id} className="post-card">
                <div 
                  className="post-image" 
                  style={{ 
                    backgroundImage: `url(${post.imageUrl})`,
                    backgroundColor: '#f0f0f0'
                  }}
                ></div>
                <div className="post-content">
                  <span className="category-badge">{post.category}</span>
                  <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span>📅 {post.date}</span>
                    <Link to={`/blog/${post.id}`} state={{ post }} className="read-more">
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
