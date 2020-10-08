import { ghosts } from '../data/ghosts.js';

const myForm = document.getElementById('form');
// const addProduct = myForm;

myForm.addEventListener('submit', e => {
    e.preventDefault();

    const formDataEntry = new FormData(myForm);

    const newProduct = {
        id: formDataEntry.get('id'),
        name: formDataEntry.get('name'),
        description: formDataEntry.get('description'),
        image: formDataEntry.get('image'),
        price: Number(formDataEntry.get('price')),
        
    
    };

    const gottenGhosts = ghosts();

    gottenGhosts.push(newProduct);

    const stringyGhosts = JSON.stringify(gottenGhosts);

    localStorage.setItem('GHOSTS', stringyGhosts);

    window.location = '../products/index.html';
});

// export default addProduct;