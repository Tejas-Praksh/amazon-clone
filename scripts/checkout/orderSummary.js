//control + a => for copy all code
import {cart, removefromcart, updateDeliveryOption} from '../../data/cart.js'; // 2 files soo  checkout scripts and /data.
import {products, getProductfunc} from '../../data/products.js';     // 2 fiels 
import {formatCurrency} from '../utils/money.js';  // 1 . means at same file . dots means diff file   soo her 1 files checkout and /utils.js
import {dayjs} from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js' // you used import and export technique for 
// noo name conflict in website export here import 
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummmary } from './paymentSummary.js';

hello();   // you called function from external but if you want no name conflikts then use in import and export
//  see code which is export soo no name conflicts

const today = dayjs();  //external libraries    function called and saved in date
const deliverydate = today.add(7, 'days');
// console.log(deliverydate); 
deliverydate.format('dddd, MMMM D')    // dddd means day m mmm means month and D means date 
// soo 7 days from today order get delivered 'monday, june 19'

export function renderOrderFAST(){    // to work page fast without any refresh update fast soo using function and running again


let cartSummaryHTML = '';

cart.forEach((CartItem) => {
const productId = CartItem.productId;
});
const matchingProduct = getProductfunc(productId);


const deliveryOptionId = CartItem.deliveryOptionId;

const deliveryOption = getDeliveryOption(deliveryOptionId);

 const today = dayjs();
const deliveryDate = today.add(
deliveryOptions.deliverydays, 'days'
);
const dateString = deliveryDate.format('dddd, MMMM D');


  // OR CartSummaryHtml +=
cartSummaryHTML  = cartSummaryHTML + `   
<div class="cart-item-container js-cart-item-container-test  js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  ${matchingProduct.getPrice()}             // for better code it is used in class product  this                              remove $${formatCurrency(matchingProduct.priceCents)}  // 2 means 2 decimal 10.90 like thia
                </div>
                <div class="product-quantity js-product-quantity-test-${matchingProduct.id}">
                  <span>
                    Quantity: <span class="quantity-label">${CartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link js-delete-link-test-${matchingProduct.id}" data-product-id = "${matchingProduct.id}" >
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                 ${deliveryOptionsHTML(matchingProduct, CartItem)}
              </div> 
            </div>
          </div>
`;


function deliveryOptionsHTML(matchingProduct, CartItem){
  let html;

deliveryOptions.forEach((deliveryOptions) => {
  const today = dayjs();
const deliveryDate = today.add(
deliveryOptions.deliverydays, 'days'
);
const dateString = deliveryDate.format('dddd, MMMM D');


const priceStrings = deliveryOptions.priceCents === 0
? 'FREE'
:  `${formatCurrency(deliveryOptions.priceCents)} -`

 const isChecked = deliveryOptions.id === CartItem.deliveryOptionId; // it cheks delivery option 1 default in first 
 // and in 2nd order delivery option 2

  html += `   
  <div class="delivery-option js-delivery-option" 
  data-product-id = "${matchingProduct.id}" data-delivery-option-id = "${deliveryOptionId}">
                  <input type="radio"
                 ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                    ${priceStrings}  Shipping
                    </div>   
                    </div>
                    </div>
  `
});

return html;
}

document.querySelector('.js-order-summary').
innerHTML = cartSummaryHTML;

document.querySelector('.js-delete-link').
forEach((link) => {
link.addEventListener('click', () => {
const productId = link.dataset.productId;
removefromcart();
renderPaymentSummmary();

const container = document.querySelector(`.js-cart-item-container-${productId}`).
container.remove();
});
});

document.querySelector('.js-delivery-option').
forEach((element) => {
element.addEventListener('click', () => {
  const {productId, deliveryOptionId} = element.dataset
updateDeliveryOption(productId, deliveryOptionId);
renderOrderFAST();
renderPaymentSummmary();
})
})
}

