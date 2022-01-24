const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const existingProduct = cart.products.find((prod) => prod.id === id);
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice += +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
          cb([]);
      } else {
          cb(JSON.parse(fileContent));
      }
    });
  }

  static deleteProduct(id, productPrice){
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProduct = cart.products.find((prod) => prod.id === id);
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      let updatedProduct;
        if(existingProduct.qty === 1)
        {
          cart.products = [...cart.products];
          cart.products = cart.products.filter((prod) => prod.id !== id);
          cart.totalPrice -= productPrice;
        }
      else {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty -= 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
        cart.totalPrice -= productPrice;
      }
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
