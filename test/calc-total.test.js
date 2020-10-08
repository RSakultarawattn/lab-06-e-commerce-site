
import { calcOrderTotal } from '../cart/cart-utils.js';
import { cartStuff, souls } from '../products/data.js';


const test = QUnit.test;

test('it should take in cart items and return the total of prices and quantities', (expect) => {

    
  
    const expected ='38';

    const actual = calcOrderTotal(cartStuff, souls);
    
    expect.equal(actual, expected);

});

