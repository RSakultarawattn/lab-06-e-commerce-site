


import { renderTableRow } from '../cart/cartUtils.js';



const test = QUnit.test;

test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {

    const cartItem = {
        id: 'tortured',
        quantity: 2,
        price: 4,
        subtotal: 8
    };

  
    const expected ='<tr><td>Tortured</td><td>$4.00</td><td>2</td><td>$8.00</td></tr>';

    const actual = renderTableRow(cartItem);

    expect.equal(actual.outerHTML, expected);

});

