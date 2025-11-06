import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
  // TODO: Check if the product list is empty and display a message if needed
  if (products === '') {
    return "There are currently no products";
  } else return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {products.map(product => <ProductCard key={product.id} products={product}/>)}
    </div>
  );
};

export default ProductList;
