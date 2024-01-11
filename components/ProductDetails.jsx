import React from 'react';

const ProductDetails = ({ title, description, price }) => {
  return (
    <div className="product-details">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-2xl font-bold text-blue-500">${price}</p>
      {/* Add Add to Cart button or other actions as needed */}
    </div>
  );
};

export default ProductDetails;