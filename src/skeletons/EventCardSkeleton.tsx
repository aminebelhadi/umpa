const EventCardSkeleton: React.FC = () => {
  return (
    <article className="event-card skeleton">
      <div className="event-date">
        <span className="day skeleton-box" style={{ width: '30px', height: '20px' }}></span>
        <span className="month skeleton-box" style={{ width: '40px', height: '15px', marginTop: '5px' }}></span>
      </div>
      <div 
        className="event-image skeleton-box" 
        style={{ height: '180px', backgroundColor: '#e0e0e0' }}
      ></div>
      <div className="event-content">
        <span className="event-type skeleton-box" style={{ width: '80px', height: '16px' }}></span>
        <h3 className="event-title skeleton-box" style={{ width: '70%', height: '24px', margin: '10px 0' }}></h3>
        <p className="event-description skeleton-box" style={{ width: '100%', height: '60px' }}></p>
        <div className="event-location">
          
          <span className="skeleton-box" style={{ width: '100px', height: '16px', marginLeft: '5px' }}></span>
        </div>
        <div className="event-cta skeleton-box" style={{ width: '120px', height: '16px', marginTop: '10px' }}></div>
      </div>
    </article>
  );
};

export default EventCardSkeleton;
