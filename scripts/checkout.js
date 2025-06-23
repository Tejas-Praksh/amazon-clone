//control + a => for copy all code
import { renderOrderFAST } from "./checkout/orderSummary.js";
import { renderPaymentSummmary } from "./checkout/paymentSummary.js";
import '../data/cart-oop.js'; // another type of import it runs without importing the data in that file
import '../data/cart-class-oop.js'
import '../data/backend.js';
import '../data/products.js'
import { loadProducts } from "../data/products.js";

loadProducts(() => {
renderOrderFAST();
renderPaymentSummmary();
});
