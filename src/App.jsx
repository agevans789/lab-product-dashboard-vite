import React, { useState } from 'react';
import ProductList from './components/ProductList';
import styles from './components/App.css';

const App = () => {

  // TODO: Define initial product data
  const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];
  
  // TODO: Implement state to manage filtering
  const filterProducts = () => {
    const [filterStatus, setFilterStatus] = useState('all');
    
    // TODO: Implement logic to filter products based on availability
    const filteredProducts = products.filter(product => {
      if (filterStatus === 'inStock') {
        return product.inStock === true;
      }
      if (filterStatus === 'outOfStock') {
        return product.inStock === false;
      }
      return true;
    })

  const showAll = () => setFilterStatus('all');
  const showInStock = () => setFilterStatus('inStock');
  const showOutOfStock = () => setFilterStatus('outOfStock');
  
  return (
    <div>
      <header id="header">
        <h1>Product Dashboard</h1>
      </header>
      <main>
        <div className={btn-group}>
          <button type={button} className={btn btn-primary} onClick={showAll}>Show All</button>
          <button type={button} className={btn btn-secondary} onClick={showInStock}>Show In Stock</button>
          <button type={button} className={btn btn-primary} onClick={showOutOfStock}>Show Out of Stock</button>
        </div>
        <ProductList products={products}/>
      </main>
    </div>
  )
};
};

export default App;
