import React from 'react';
import styles from '../styles/ProductCard.module.css';


const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

const ProductCard = ({products}) => {
  return (
    <div>
      {products.map(product =>
        <div key={product.id} className={`${styles.productContainer} ${product.inStock ? '' : styles.outOfStock}`}>
          {!product.inStock && (
            <div className={styles.diagonalBanner}>
              <div className={styles.bannerContent}>
                <h1>Out of Stock</h1>
              </div>
            </div>
          )}
          <img src="..." className={styles.productImage} alt="..."></img>
          <div className={styles.cardBody}>
            <h3 className={styles.productTitle}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <p className={styles.productAvailability}>
              <button className={product.inStock ? 'btn btn-primary' : 'btn btn-secondary'} disabled={!product.inStock}>Buy Now</button>
            </p>
          </div>
        </div>
      )} 
    </div>
  );
}


export default ProductCard;
