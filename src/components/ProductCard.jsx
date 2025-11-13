import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({product, onProductRemove, ...props}) => {
  let style = `${styles.productContainer}`;
  if (product.inStock) {
    style = `${style} ${styles.inStockClass}`
  } else {
    style = `${style} ${styles.outOfStockClass} outOfStockClass`
  };
  return (
    <>
          <img src="..." className={styles.productImage} alt="..."></img>
          <div className={style}>
            <h3 className={styles.productTitle}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <p className={styles.productAvailability}> 
              <button onClick={(e) => onProductRemove(product, e)}>Remove</button>
            </p>
          </div>
    </>
  );
}

export default ProductCard;
