


import { renderTableRow } from '../cart/cart-utils.js';
import { souls } from '../products/data.js';



const test = QUnit.test;

test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {

    const cartItem = {
        id: 'tortured',
        name: 'Tortured',
        quantity: 2,
        price: 4,
        subtotal: 8
    };

  
    const expected ='<tr><td>Tortured Soul</td><td>$4</td><td>2</td><td>$8</td></tr>';

    const actual = renderTableRow(souls, cartItem);
    console.log(actual)
    expect.equal(actual.outerHTML, expected);

});

