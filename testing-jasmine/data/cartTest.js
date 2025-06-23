import { addToCart, cart, loadFromStorage } from "../../data/cart.js";  //.. out file of data then testing then data
import { products } from "../../data/products.js";

describe('test suite : addToCart', () => {
it('adds excisting product to cart', () => {
  spyOn(localStorage, 'setItem');
spyOn(localStorage, 'getItem').and.callFake(() => {
return JSON.stringify([{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1,
  deliveryOptions: 2
}]);
});

});

it('adds a new product to cart', () => {
spyOn(localStorage, 'setItem')

spyOn(localStorage, 'getItem').and.callFake(() => {
return JSON.stringify([{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1,
  deliveryOptions: 2
}]);
});

loadFromStorage();

addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');     // this all are testing ayou can test product is same or quantity and many
expect(cart.length).toEqual(1);         
expext(localStorage).setItem.toHaveBEeenCalledTimes(1);
expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
expect(cart[0].quantity).toEqual(2);

});
});