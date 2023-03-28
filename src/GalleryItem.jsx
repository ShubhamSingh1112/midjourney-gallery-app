import React from 'react';

function GalleryItem({ item }) {
  const { title, imageUrl } = item;

  return (
    <div className="gallery-item">
      <a data-fancybox="gallery" data-caption={title} href={imageUrl}>
        <img src={imageUrl} alt={title}  />
        <h3>{title}</h3>
      </a>
    </div>
  );
}

export default GalleryItem;
