import{cart} from '../../data/cart.js';  // checkout 1 scripts 2 then /data/cart  soo 2 outside
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { getProductfunc } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
import { addOrder } from '../../data/orders.js';
 
export function renderPaymentSummmary(){
  let productPriceCents = 0;
  let shippingPriceCents = 0;

cart.forEach((cartItem) => {
const product = getProductfunc(cartItem.productId);
productPriceCents += product.priceCents * CartItem.quantity

 const deliveryOption = getDeliveryOption(cartItem.DeliveryOptionId);
 shippingPriceCents +=  deliveryOption.priceCents;
});
  
const totalBeforeTax = productPriceCents + shippingPriceCents;
const totalAfterTax = totalBeforeTax * 0.1; // tax 10% is 0.1 10/100
const totalFianlAmunt = totalBeforeTax + totalAfterTax;

const paymentSummaryHtml = `
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>   // it is in cents soo used function after import from money,js
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(totalAfterTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalFianlAmunt)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
`;



document.querySelector('.js-payment-summary')
.innerHTML = paymentSummaryHtml;

document.querySelector('.js-place-order')
.addEventListener('click', async () => {
try{

const response = await fetch('https://supersimplebackenddev/orders', {
  method: 'POST',
  headers: {'content-Type': 'application/json' },   //json means js object 
  body: JSON.stringify({
    cart: cart
  })
})          //Inside an async function, you can use the await keyword. 
});

const order = await response.JSON();
 addOrder(order);   } 
 catch(error){
console.log('unexpected error')
 }
 window.location.href = 'orders.html'
}


