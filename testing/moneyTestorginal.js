import { formatCurrency } from "../scripts/utils/money";

console.log('testing format currency')
console.log('convert cents to dollor');
if(formatCurrency(2095) === '20.95'){
  console.log('true')
}
else{
  console.log('false')
   }             // basic test case: code work or not

console.log('check with 0');
if(formatCurrency(0) === '0.00'){
  console.log('pass')
}
else{
  console.log('fail')
}           // edge test case: code with tricky usage

console.log('round off checking')
if(formatCurrency(2000.5) === '20.01'){   // roundoff said already in format currency 
  console.log('pass')
}
else{
  console.log('fail')
}

console.log('testing tax final amount calc tax: 10% = 0.1 * beforeamount')