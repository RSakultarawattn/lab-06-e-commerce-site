// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderSouls } from '../products/utils.js';

const test = QUnit.test;

test('should take in a soul and return an li with appropriate contents', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const souls = {

        id: 'tortured',
        name: 'Tortured Soul',
        image: 'tortured_soul.jpg',
        description: 'tortured, despairing soul',
        category: 'dark souls',
        price: 6.66


    };

    const expected = `<li class="souls"><p class="name">Tortured Soul</p><img class="image" src="../assets/tortured_soul.jpg"><p class="description">tortured, despairing soul</p><p class="price">$6.66</p><button>Add to cart</button></li>`
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderSouls(souls);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
