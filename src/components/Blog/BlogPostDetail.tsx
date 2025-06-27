import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './BlogPage.css';
import Header from '../Header';
import Footer from '../Footer';

const BlogPostDetail: React.FC = () => {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#E57B51' }}>Données non disponibles.</p>
        <Link to="/blog" className="cta-button" style={{ marginTop: 24, display: 'inline-block' }}>
          ← Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-page">
        <Header />
      {/* Héro du post */}
      <section className="blog-hero" style={{ minHeight: '35vh', padding: '90px 0 40px 0', marginBottom: 0 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 style={{ marginBottom: 18 }}>{post.title}</h1>
        </div>
      </section>

      {/* Article détaillé sans carte */}
      <div className="container" style={{ maxWidth: 900, marginTop: -70, marginBottom: 60 }}>
        {/* Image principale */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            width: '100%',
            height: 340,
            backgroundImage: `url(${post.imageUrl})`,
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
          <span className="category-badge">{post.category}</span>
          <span style={{ color: '#E57B51', fontWeight: 600, fontSize: '1rem' }}>Publié le {post.date}</span>
        </div>
        {/* Contenu de l'article */}
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
          <div dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
        </article>
        {/* Retour au blog */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/blog" className="cta-button">
            ← Retour à la liste des articles
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;