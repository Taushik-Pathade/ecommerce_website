import React from 'react';

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="related-products mt-8">
      <h3 className="text-xl font-semibold mb-4">Related Products</h3>
      <ul className="list-disc list-inside">
        {relatedProducts.map((product, index) => (
          <li key={index} className="text-blue-500 hover:underline cursor-pointer">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;