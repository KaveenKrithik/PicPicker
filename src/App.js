import React from 'react';
import './styles/main.css';
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <h1>Photo Selector</h1>
      <ImageUpload />
      <ImageGallery />
    </div>
  );
}

export default App;
