// shop.js

const products = require("./products");

function findProduct(productName) {
  const product = products.find(prod => prod.name === productName);
  if (product) {
    console.log("Product found:");
    console.log("Name:", product.name);
    console.log("Price:", product.price);
    console.log("Category:", product.category);
  } else {
    console.log("Product not found.");
  }
}

// Call findProduct function with different product names
findProduct("Laptop");
findProduct("Book");
findProduct("Chair");
findProduct("Phone"); // This product does not exist
