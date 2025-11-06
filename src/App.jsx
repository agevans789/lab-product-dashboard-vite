import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {

  // TODO: Define initial product data
  const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];
  
  // TODO: Implement state to manage filtering
  const [] = useState();

  // TODO: Implement logic to filter products based on availability


  return (
    <div>
      <h1>{dashboardTitle}</h1>
      <ProductList products={products}/>
    </div>
  )
};

export default App;
