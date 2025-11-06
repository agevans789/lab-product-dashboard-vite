import React from 'react';
import styles from '../styles/ProductCard.module.css';
import createElements from '../App';
import index from '../index';

const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

const ProductCard = (products) => {
  createElements(products);
  return (
    <>
      {container}
      {title}
      {price}
      {availability}
    </>
  );
};

export default ProductCard;
