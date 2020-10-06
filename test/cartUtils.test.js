


import { renderTableRow } from '../cart/cartUtils.js';
import { cart } from '../';

const test = QUnit.test;

test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {

    const cartItem = {
        id: 'tortured',
        quantity: 2,
        price: $4,
        subtotal: $8
    });

  
    const expected ='<tr><td>Tortured</td><td>$4.00</td><td>2</td><td>$8.00</td></tr>';

    const actual = renderTableRow(cartItem);

    expect.equal(actual.outerHTML, expected);


    /*test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {
        const cartItem = {
            id: 'airplanes',
            quantity: 2
        });
    
        //Arrange
        // Set up your arguments and expectations
        const expected = '<tr><td>The Big Airplane Book</td><td>$3</td><td>2</td><td>$6</td></tr>';
        
        //Act 
        // Call the function you're testing and set the result to a const
        const actual = renderTableRow(cartItem);
    
        //Expect
        // Make assertions about what is expected versus the actual result
        expect.equal(actual.outerHTML, expected);
    });*/