// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { calcLineItem } from '../Utils.js';

const test = QUnit.test;

test('takes in quanity and amount and turns in total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 'patrick-swayze',
        name: 'Patrick Swayze',
        image: 'patrick-swayze.jpg',
        description: 'The sexiest ghost of all. Good with clay and Whoopi Goldberg',
        category: 'haunting',
        price: 100.00,
        quanity: 3
    };
    const total = 300;
 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(total);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, actual);
});
