

const PetCardSkeleton = () => {
  return (
    <div className="pet-card-skeleton">
      <div className="image-skeleton shimmer"></div>
      <div className="info-skeleton">
        <div className="line-skeleton short shimmer"></div>
        <div className="line-skeleton medium shimmer"></div>
        <div className="line-skeleton long shimmer"></div>
      </div>
    </div>
  );
};

export default PetCardSkeleton;
