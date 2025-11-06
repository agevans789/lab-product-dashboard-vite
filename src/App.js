const dashboardTitle = document.getElementById('header');
  if (dashboardTitle) {
    dashboardTitle.textContent = "Product Dashboard"
  };

const productList = document.getElementById("product-list");

const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

export default function createElements(products) {
    products.map(product =>
        <div id="productContainer">
            <h3 id="productTitle"></h3>
            <p id="productPrice"></p>
            <p id="productAvailability"></p>
            <img id="productImage"></img>
        </div>
    );
};

document.getElementById("productContainer").appendChild(document.getElementById("productTitle"));
document.getElementById("productContainer").appendChild(document.getElementById("productPrice"));
document.getElementById("productContainer").appendChild(document.getElementById("productAvailability"));
document.getElementById("productContainer").appendChild(document.getElementById("productImage"));
productList.appendChild(document.getElementById("productContainer"));
