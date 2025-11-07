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
  const filterProducts = () = {
    const 
    const [filterStatus, setFilterStatus] = useState('all');
    
    // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filterStatus === 'inStock') {
      return product.inStock === true
    }
  })
  }
  

  

  return (
    <div>
      <header id="header">
        <h1>{dashboardTitle}</h1>
      </header>
      <main>
        <button onClick={()=> filterAvailability()}>Filter By Availability</button>
        <ProductList products={products}/>
      </main>
    </div>
  )
};

export default App;
