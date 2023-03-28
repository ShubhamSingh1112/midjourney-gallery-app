import React, { useState, useEffect, lazy, Suspense } from 'react';
import galleryData from './galleryData.json';
import Fancybox from './Fancybox';

const GalleryItem = lazy(() => import('./GalleryItem'));

function Gallery() {
  const [items, setItems] = useState([]);
  const [loadedItems, setLoadedItems] = useState(16);

  useEffect(() => {
    setItems(galleryData);
  }, []);

  const loadMoreItems = () => {
    setLoadedItems(loadedItems + 16);
  };

  return (
    <>
      <div className="container">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}>
          {items.slice(0, loadedItems).map(item => (
            <Suspense key={item.id} fallback={<div>Loading...</div>}>
              <GalleryItem item={item} />
            </Suspense>
          ))}
        </Fancybox>
        {loadedItems >= items.length ? (
            <p>No more images to show.</p>
          ) : (
            <button onClick={loadMoreItems}>Load more</button>
          )}
      </div>
    </>
  );
}

export default Gallery;