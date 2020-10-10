
import { findById } from '../common/utils.js';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const newGhost = {
        id: data.get('id'),
        name: data.get('name'),
        description: data.get('description'),
        image: data.get('image'),
        price: Number(data.get('price')),
        
    
    };


    const existingGhosts = findById();

    existingGhosts.push(newGhost);

    const stringyGhosts = JSON.stringify(existingGhosts);
    localStorage.setItem('GHOSTS', stringyGhosts);

    window.location = '../products/index.html';
});


// export function getFromLocalStorage(key) {
//     const item = localStorage.getItem(key);

//     return JSON.parse(item);
// }

// export function setInLocalStorage(key, value) {
//     const stringyItem = JSON.stringify(value);

//     localStorage.setItem(key, stringyItem);

//     return value;
// }

// export function addProduct(newItem) {
//     const localStorageProducts = getFromLocalStorage();

//     localStorageProducts.push(newItem);

//     const stringyLocalProduct = JSON.stringify(localStorageProducts);
//     localStorage.setItem(GHOSTS, stringyLocalProduct);


// }