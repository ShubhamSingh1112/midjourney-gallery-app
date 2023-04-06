import React, { useState } from 'react';

function GalleryItem({ item }) {
  const { title, imageUrl } = item;
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  
  return (
    <div className="gallery-item">
      <a data-fancybox="gallery" data-caption={title} href={imageUrl}>
        {!loaded && <div className="shimmer"></div>}
        <img
          src={imageUrl}
          alt={title}
          onLoad={handleLoad}
          style={loaded ? {} : { display: 'none' }}
        />
        <h3>{title}</h3>
      </a>
    </div>
  );
}

export default GalleryItem;
