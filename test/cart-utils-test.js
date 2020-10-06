// IMPORT MODULES under test here:
// import { example } from '../example.js';
import renderTableRow from '../cart/cart-utils.js';

const test = QUnit.test;

test('should take in a book and return an li with an approp contents', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: 'patrick-swayze',
        quantity: 2
    };

    const expected = '<tr><td>Patrick Swayze</td><td>$100</td><td>2</td><td>$300</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual.outerHTML);
});
