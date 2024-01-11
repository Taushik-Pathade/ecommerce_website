import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="product-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product Image ${index + 1}`}
          className={`cursor-pointer ${selectedImage === index ? 'border-4 border-blue-500' : ''}`}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
};

export default ProductGallery;