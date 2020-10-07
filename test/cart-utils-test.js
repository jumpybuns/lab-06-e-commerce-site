// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../Utils.js';
import { ghosts } from '../data/cart.js';
const test = QUnit.test;

test('should take in an array and return correct id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 'patrick-swayze',
        name: 'Patrick Swayze',
        image: 'patrick-swayze.jpg',
        description: 'The sexiest ghost of all. Good with clay and Whoopi Goldberg',
        category: 'haunting',
        price: 100.00,
        cost: 2.00
    };
    
    const id = 'patrick-swayze';
 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(ghosts, id);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, actual);
});
