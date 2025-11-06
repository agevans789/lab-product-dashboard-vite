const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

export default function index(products) {
    if (products !== '') {
        products.forEach(product => {
            const container = document.getElementById("productContainer");
            container.textContent = product.id;
            const title = document.getElementById("productTitle");
            title.textContent = product.name;
            const price = document.getElementById("productPrice");
            price.textContent = product.price; 
            const availability = document.getElementById("productAvailability");
            availability.textContent = product.inStock;
        });
    };
};