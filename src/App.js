import React, { useState, useEffect } from 'react';
import './styles/main.css'; 
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';
import api from './services/api'; 

function App() {
  const [images, setImages] = useState([]);
  
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get('/images'); 
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PicPicker</h1>
        <nav className="navbar">
          <a href="#upload">Upload Photos</a>
          <a href="#gallery">Best Photos</a>
        </nav>
      </header>
      <main>
        <div id="upload">
          <ImageUpload />
        </div>
        <div id="gallery">
          <ImageGallery images={images} />
        </div>
      </main>
      <footer>
        <p>&copy; 2024 PicPicker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

