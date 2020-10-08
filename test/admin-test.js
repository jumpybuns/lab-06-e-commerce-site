
const test = QUnit.test;

test('take array as an id and returns first item found', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const newProduct = {
        id: 'id',
        name: 'name',

    };

    const expected = [{
        id: 'candyman',
        name: 'Candyman',
        image: 'candyman.jpg',
        description: 'Can be summoned by saying his name five times in a mirror',
        category: 'haunting',
        price: 250.0,
        cost: 2.50
    }, {
        id: 'id',
        name: 'name',
        image: 'image',
        description: 'description',
        category: 'category',
        price: 200,
        cost: 100
    
    }, {
        id: 'id',
        price: 50
    },
    ];


    addProduct(newProduct);


    
    const localStorageAfter = JSON.parse(localStorage.getItem('ghosts'));
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, localStorageAfter);
});
