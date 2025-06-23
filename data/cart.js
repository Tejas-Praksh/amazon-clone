export let cart;



loadFromStorage();

export function loadFromStorage(){
cart =  JSON.parse(localStorage.getItem('cart'));

if(!cart){   //if empty cart then default it gets this
  cart = [{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptions: 1
},
{
  productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryOptions: 2
}];
}
}

function savetoocalstorage(){     // local storage can only save sting soo stingify
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
let matchingItem;
cart.forEach((CartItem) => {
if(productId === CartItem.productId) {
matchingItem = CartItem;
}
});

if(matchingItem){
  matchingItem.quantity += 1;
}
else{
cart.push({
  productId: productId,
  quantity: 1,
  deliveryOptions: '1'
});
}

savetoocalstorage();
}
// function has called in amazon.js see 

// function ccalled in checkout.js
export function removefromcart(productId){
const newCart = [];

cart.forEach((CartItem) => {
if(CartItem.productId !== productId){
newCart.push(CartItem);
}
});
cart = newCart;

savetoocalstorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){

let matchingItem;
cart.forEach((CartItem) => {
if(productId === CartItem.productId) {
matchingItem = CartItem;
}
});

matchingItem.deliveryOptionId = deliveryOptionId;

savetoocalstorage();
}

