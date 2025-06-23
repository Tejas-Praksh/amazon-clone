// spec in jasmin means test in js so renamed--> 
import { formatCurrency } from "../../scripts/utils/money.js";

describe('testing format currency', () => {    // describein jasmine means heading then it means sub heading 
 it('convert cents to dollor', () => {
  except(formatCurrency(2095)).toEqual('20.95');    // except means if on moneytest.js normal not in jaspine
 }); 
 it('check with 0 ', () => {
  except(formatCurrency(0)).toEqual('0.00');
 });

 it('round off checking', () => {
  except(formatCurrency(2000.5)).toEqual('20.01');
 });

});
