// IMPORT MODULES under test here:
// import { example } from '../example.js';
import findById from './Utils.js';

const test = QUnit.test;

test('take array as an id and returns first item found', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const patrickSwayze = {
        id: 'patrick-swayze',
        name: 'Patrick Swayze',
        image: 'patrick-swayze.jpg',
        description: 'The sexiest ghost of all. Good with clay and Whoopi Goldberg',
        category: 'haunting',
        price: 100.00,
        cost: 2.00
    };

    const expected = '<li class="haunting" title="The sexiest ghost of all. Good with clay and Whoopi Goldberg"><h3>Patrick Swayze</h3><img src="../assets/patrick-swayze.jpg" alt="Patrick Swayzeimage"><p class="price">$100.00<button value="undefined">Add to Cart</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(patrickSwayze);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual.outerHTML);
});
