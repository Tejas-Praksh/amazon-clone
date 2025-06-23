// in oops we organize code into objects and more clear
//we need to convert to oops soo data and functiona add in 1 object = not allowed only :
function Cart(localStorageKey){
const cart= {cartItems: undefined,   //let cart; means nothing undefined

loadFromStorage: function(){  // or loadFromStorage(){ export function not allowed you need to define by collon
cart.cartItems =  JSON.parse(localStorage.getItem(/*'cart-oop' instead of this*/ localStorageKey ));      //cart.cartItems to acess cartItems

if(!this.cartItems){    // why this you can use this.cartItems  everywhere bcs in this even if you change variable it works soo use it
  cart.cartItems = [{      //but down i used this for reference 
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
},

savetolocalstorage(){     // local storage can only save sting soo stingify
  localStorage.setItem(/*'cart-oop' instead of this */ localStorageKey, JSON.stringify(this.cartItems));  //cart-oop bcs not to disturb original cart
},

addToCart(productId){  //or loadFromStorage: function()
let matchingItem;
cart.cartItemst.forEach((CartItem) => {
if(productId === CartItem.productId) {
matchingItem = CartItem;
}
});

if(matchingItem){
  matchingItem.quantity += 1;
}
else{
this.cartItems.push({
  productId: productId,
  quantity: 1,
  deliveryOptions: '1'
});
}
this.savetolocalstorage();  // to acess function inside the top
},
// function has called in amazon.js see 


// function ccalled in checkout.js
removefromcart(productId){
const newCart = [];

this.cartItems.forEach((CartItem) => {
if(CartItem.productId !== productId){
newCart.push(CartItem);
}
});
this.cartItems = newCart;

this.savetolocalstorage();  // function defined on top inside soo to acess this.save
},

updateDeliveryOption(productId, deliveryOptionId){

let matchingItem;
cart.cartItems.forEach((CartItem) => {
if(productId === CartItem.productId) {
matchingItem = CartItem;
}
});

matchingItem.deliveryOptionId = deliveryOptionId;

this.savetolocalstorage();
}

};   
return Cart;   //RETURN BECAUSE YOU CAN USE IT OUTSIDE FUNCTION 
}





/*   
//multiple object can be created in oops ex like two carts in amazon normal cart and business cart
// instead of copy paste create function and doo it y just adiing function 


const businessCart= {
  cartItems: undefined,   //let cart; means nothing undefined

loadFromStorage: function(){  // or loadFromStorage(){ export function not allowed you need to define by collon
cart.cartItems =  JSON.parse(localStorage.getItem('cart-business'));      //cart.cartItems to acess cartItems

if(!this.cartItems){    // why this you can use this.cartItems  everywhere bcs in this even if you change variable it works soo use it
  cart.cartItems = [{      //but down i used this for reference 
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
},

savetolocalstorage(){     // local storage can only save sting soo stingify
  localStorage.setItem('cart-business', JSON.stringify(this.cartItems));  //cart-oop bcs not to disturb original cart
},

addToCart(productId){  //or loadFromStorage: function()
let matchingItem;
cart.cartItemst.forEach((CartItem) => {
if(productId === CartItem.productId) {
matchingItem = CartItem;
}
});

if(matchingItem){
  matchingItem.quantity += 1;
}
else{
this.cartItems.push({
  productId: productId,
  quantity: 1,
  deliveryOptions: '1'
});
}
this.savetolocalstorage();  // to acess function inside the top
},
// function has called in amazon.js see 


// function ccalled in checkout.js
removefromcart(productId){
const newCart = [];

this.cartItems.forEach((CartItem) => {
if(CartItem.productId !== productId){
newCart.push(CartItem);
}
});
this.cartItems = newCart;

this.savetolocalstorage();  // function defined on top inside soo to acess this.save
},

updateDeliveryOption(productId, deliveryOptionId){

let matchingItem;
cart.cartItems.forEach((CartItem) => {
if(productId === CartItem.productId) {
matchingItem = CartItem;
}
});

matchingItem.deliveryOptionId = deliveryOptionId;

this.savetolocalstorage();
}

};   

business.loadFromStorage();   // it was not defined in export it is to run fast of cart

console.log(businessCart);   */


const cart = Cart();
const businessCart = Cart('cart-business');



cart.loadFromStorage();   // it was not defined in export it is to run fast of cart
businessCart.loadFromStorage();



console.log(cart);
//now you can add to cart any products id and more products and it runs
cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
console.log(cart);

console.log(businessCart);

//oops and class both are same but class has some exxtra feature after adiing objects to class like private  