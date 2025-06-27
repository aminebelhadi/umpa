import React from 'react';

const FeaturedCardSkeleton: React.FC = () => {
  return (
    <article className="featured-card skeleton">
      <div 
        className="featured-image skeleton-box" 
        style={{ height: '200px', backgroundColor: '#e0e0e0' }}
      ></div>
      <div className="featured-content">
        <span className="category-badge skeleton-box" style={{ width: '80px', height: '16px' }}></span>
        <h3 className="skeleton-box" style={{ width: '70%', height: '24px', margin: '10px 0' }}></h3>
        <p className="skeleton-box" style={{ width: '100%', height: '60px', marginBottom: '10px' }}></p>
        <div className="post-meta">
          <span className="skeleton-box" style={{ width: '100px', height: '16px' }}></span>
          <div className="read-more skeleton-box" style={{ width: '100px', height: '16px', marginLeft: '10px' }}></div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCardSkeleton;
