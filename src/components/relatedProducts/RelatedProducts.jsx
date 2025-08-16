import React,{useEffect} from 'react';
import data_product from '../Assets/data';
import Item from '../item/Item';
import './RelatedProducts.css';

const RelatedProducts = ({ category, currentProductId }) => {
  const relatedProducts = data_product.filter(
  (product) =>
    product.category?.toLowerCase() === category.toLowerCase() &&
    product.id !== currentProductId
);


  if (relatedProducts.length === 0) {
    return <p>No related products available.</p>;
  }
  

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <div className="related-products-list">
        {relatedProducts.map(product => (
          <Item 
            key={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
