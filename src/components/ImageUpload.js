import React, { useState } from 'react';
import axios from '../services/api';

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFiles = (e) => {
    setFiles(e.target.files);
  };

  const uploadImages = async () => {
    setLoading(true);
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append("files", file);
    });

    await axios.post('/upload/', formData);
    setLoading(false);
    alert("Upload completed!");
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFiles} />
      <button onClick={uploadImages} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Photos'}
      </button>
    </div>
  );
};

export default ImageUpload;
