// array : list of product 
// object: group multiple values together like image name price array: inside object{}
 /* const products = [{ 
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name:  'Black and Gray Athletic Cotton Socks - 6 Pairs',
  ratings: {
    stars: 4.5,
    count: 87
  }, 
  priceCents: 1090 // saving not like 10.90 bcs javascript has prob in decimal
},
{
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  ratings: {
    stars: 4,
    count: 127
  }, 
  priceCents: 2095
},{
  image : 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name:  'Adults Plain Cotton T-Shirt - 2 Pack',
  ratings: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
},{
  image : 'images/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  ratings: {
    stars: 5,
    count: 289
  },
  priceCents: 2500
}]     */     // this is already done for all products by youtuber in seperate file soo linked in html see down

import {products, loadProducts} from '../data/products.js';
import {cart, addToCart} from '../data/cart.js';
import { formatCurrency } from './utils/money.js';  

 // const cart = [];  // see by using module, export, import you can use two times same thing 

 loadProducts(renderProductGrid);  //function after load to run so fun under fun call fun in products.js

 function renderProductGrid(){   //to run inside new fun

let productsHtml = ''

//run the ;loop
products.forEach((product) => {
productsHtml = productsHtml +  `  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}   
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"  
              src= "${product.getStarsUrl()}}">         // "images/ratings/rating-${product.ratings.stars * 10}.png" instead of this due to code improve we define in class in product direct 
            <div class="product-rating-count link-primary">
              ${product.ratings.count}
            </div>
          </div>

          <div class="product-price">
               ${product.getPrice()};      //  it is in product in class bcs for better code $${formatCurrency(product.priceCents)}   bcs it gives 1 decimal soo 2 used 
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
               
          ${product.extraInfoHtml()} 

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

<button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${product.id}"> 
// data product anme is new this is to learn to add to cart you can add $prod price $prod image
            Add to Cart
          </button>
        </div>
`;
});

document.querySelector('.js-product-grid').
innerHTML = productsHtml;


function updateCartQuantity(){
let cartQuantity = 0; 

cart.forEach((CartItem) => {
cartQuantity += CartItem.quantity;
});

document.querySelector('.js-cart-quantity').
innerHTML = cartQuantity;
// console.log(cart)
//console.log(cartQuantity)
}


document.querySelector('.js-add-to-cart').
forEach((butoon) => {
button.addEventListner('click', () => {
const productId = butoon.dataset.productId;    // there data-product-name defiend after class 

addToCart(productId);
updateCartQuantity();
});

});   // () => ; {} => noo ;
 }