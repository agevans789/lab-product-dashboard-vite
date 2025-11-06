import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const dashboardTitle = document.getElementById('header');
  if (dashboardTitle) {
    dashboardTitle.textContent = "Product Dashboard"
  };
  // TODO: Define initial product data
  const productObjects = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];
  // TODO: Implement state to manage filtering

  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1>Product Dashboard</h1>
      <button variant="contained">Contained</button>
      <ProductList />
      
      {/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}
      
    </div>
  );
};

export default App;
