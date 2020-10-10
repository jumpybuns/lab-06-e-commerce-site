
import { getLocallyStoredGhosts } from '../Utils.js';

const form = document.getElementById('form');

export const GHOSTS = 'GHOSTS';


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
  
    const id = data.get('id');
    const name = data.get('name');
    const description = data.get('description');
    const image = data.get('image');
    const price = data.get('price');

    const newGhost = {
        id: id,
        name: name,
        description: description,
        image: image,
        price: Number(price),
        
    
    };


    const localStorageGhosts = getLocallyStoredGhosts();

    localStorageGhosts.push(newGhost);

    const stringyLocalGhosts = JSON.stringify(localStorageGhosts);
    localStorage.setItem(GHOSTS, stringyLocalGhosts);

    // window.location = '../products/index.html';
});


export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}

export function addProduct(newItem) {
    const localStorageProducts = getFromLocalStorage();

    localStorageProducts.push(newItem);

    const stringyLocalProduct = JSON.stringify(localStorageProducts);
    localStorage.setItem(GHOSTS, stringyLocalProduct);


}