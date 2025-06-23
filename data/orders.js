export const orders =  JSON.parse(localStorage.getItem('orders')) || [];  //parse converet js string to object

export function addOrder(order) {
  orders.unshift(order);  //it adds recent order at biginning of array 
  savetoStorage(); 
}

function savetoStorage(){
localStorage.setItem('orders', JSON.stringify(orders));  // it converts objects and arrays ans js values into sting 
}