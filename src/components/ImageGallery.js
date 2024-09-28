import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await axios.get('/best_images/');
      setImages(res.data);
    }

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image, idx) => (
        <img key={idx} src={`path_to_image_folder/${image}`} alt="best" />
      ))}
    </div>
  );
};

export default ImageGallery;
