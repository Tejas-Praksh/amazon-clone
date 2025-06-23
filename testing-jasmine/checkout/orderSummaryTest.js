import { renderOrderFAST } from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage } from "../../data/cart.js"; 
import { products } from "../../data/products.js";
import { loadProducts } from "../../data/products.js";


describe('test suite: renderOrderFast', () =>{
  it('display the cart', () => {
    document.querySelector('.js-test-container').innerHTML = ` 
    <div class = "js-order-summary" </div>
    `;

    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
      const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'


      
    spyOn(localStorage, 'getItem').and.callFake(() => {
return JSON.stringify([{
   productId : productId1,
  quantity: 2,
  deliveryOptions: 1
},
{
  productId : productId2,
  quantity: 1,
  deliveryOptions: 2
}]);
});

loadFromStorage();
renderOrderFAST();

expect(document.querySelector('.js-cart-item-container-test').length).toEqual(2);
expect(document.querySelector(`.js-product-quantity-test-${productId1}`).innerText
).toContain('Quantity: 2');
expect(document.querySelector(`.js-product-quantity-test-${productId2}`).innerText
).toContain('Quantity: 2');

       
  });



  it('removes a product', () => {
       document.querySelector('.js-test-container').innerHTML = ` 
    <div class = "js-order-summary" </div>
    <div class = "js-payment-summary"</div>
    `;

    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
      const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'

    spyOn(localStorage, 'getItem').and.callFake(() => {
return JSON.stringify([{
   productId : productId1,
  quantity: 2,
  deliveryOptions: 1
},
{
  productId : productId2,
  quantity: 1,
  deliveryOptions: 2
}]);
});

loadFromStorage();
renderOrderFAST();

document.querySelector(`.js-delete-link-test-${productId1}`).click();
expect(document.querySelector('.js-cart-item-container-test').length).toEqual(1);

 document.querySelector('.js-test-container').innerHTML = '';
  });
});