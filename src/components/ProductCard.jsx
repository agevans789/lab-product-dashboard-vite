import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({product}) => {
  return (
    <div className={`product ${!inStock? 'out-of-stock': ''}`}>
      <h3>{product.name}</h3>
      <p><strong>{product.price}</strong></p>
      <p>{product.inStock}</p>
      <img src="productImage"></img>
    </div>
  );
};

export default ProductCard;
