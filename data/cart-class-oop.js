class Cart{    // use pascal case capital C for generate objects
//lets bring properties and methods 
cartItems;
#localStorageKey; // why #  property can be changed outside class but to not change doo private to change inside class only by #

constructor(localStorageKey){           //constructor is extra feuture in class for better code you can bring outside class define to inside
this.#localStorageKey = localStorageKey; 
this.#loadFromStorage()
}

#loadFromStorage()   /*: function removed */ {  // or loadFromStorage(){ export function not allowed you need to define by collon
cart.cartItems =  JSON.parse(localStorage.getItem(/*'cart-oop' instead of this*/ this.#localStorageKey ));      //cart.cartItems to acess cartItems

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
}
savetolocalstorage(){     // local storage can only save sting soo stingify
  localStorage.setItem(/*'cart-oop' instead of this */this.#localStorageKey, JSON.stringify(this.cartItems));  //cart-oop bcs not to disturb original cart  
}

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
}
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
}
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
}

//cart.localStorageKey = 'aaaaaa'       property can be changed outside class but to not change
                                         //doo private to change inside class only by # 
  //cart.#localstoraekey ='aaaa'  now it gives error because # used not outside class usable                                      


/* const cart = new Cart();
const businessCart = new Cart();

// constructor used
  cart.localStorageKey = 'cart-oop';
businessCart.localStorageKey = 'cart-business';

cart.loadFromStorage();   // it was not defined in export it is to run fast of cart in page
businessCart.loadFromStorage();                       see constructor it defined there inside now*/

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business')

console.log(cart);
console.log(businessCart);

//oops and class both are same but class has some exxtra feature after adiing objects to class like private 