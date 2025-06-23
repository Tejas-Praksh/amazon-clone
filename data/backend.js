const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
xhr.response
});

xhr.open('get', 'https://supersimplebackend.dev/products')  // products means it gives product then 
// /not-supported means it gives 404 error from our side
xhr.send();
// xhr.response it will be undefined and load slow respose of computer 