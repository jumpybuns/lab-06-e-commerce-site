import { GHOSTS } from './constants.js';
import ghosts from '../data/ghosts.js';


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}

export function getLocallyStoredGhosts() {
    let localStorageGhosts = JSON.parse(localStorage.getItem(GHOSTS));

    if (!localStorageGhosts) {
        const stringyGhosts = JSON.stringify(ghosts);
        localStorage.setItem(GHOSTS, stringyGhosts);
        localStorageGhosts = ghosts;
    }
    return localStorageGhosts;
}

export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, ghosts) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const ghost = findById(ghosts, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, ghost.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}

export const CART = 'CART';

export function renderGhosts(ghost) {
    const li = document.createElement('li');
    li.classList.add(ghost.category);
    li.title = ghost.description;

    const h3 = document.createElement('h3');
    h3.textContent = ghost.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + ghost.image;
    img.alt = `${ghost.name}image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${ghost.price.toFixed(2)}`;

    const button = document.createElement('button');
    const removeButton = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = ghost.code;
    button.textContent = 'Add to Cart';
    button.style.width = '50%';
    button.style.fontFamily = 'Ghosts';


    button.addEventListener('click', () => {

        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, ghost.id);

        if (itemInCart === undefined) {

            const newCartItem = { 
                id: ghost.id,
                quantity: 1,
            };
            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
            
        }
        setInLocalStorage(CART, cart);


        
    });

        
        

    
    removeButton.textContent = 'Remove One';
    removeButton.style.width = '50%';
    removeButton.style.fontFamily = 'Ghosts';


    removeButton.addEventListener('click', () => {
        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, ghost.id);

        if (itemInCart) {
            if (itemInCart.quantity !== 0) {
                itemInCart.quantity--;
            }
        }


    });

    li.appendChild(button);
    li.appendChild(removeButton);
    
    return li;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}

export function seedAndGetProducts() {
    let seed = (getFromLocalStorage(GHOSTS));

    if (!seed) {
        const hardStringySeed = JSON.stringify(ghosts);

        localStorage.setItem(GHOSTS, hardStringySeed);
        seed = ghosts;
    }
    return seed;
}

export function addProduct(newGhost) {

    const localStorageGhost = seedAndGetProducts();

    localStorageGhost.push(newGhost);

    const stringyLocalDice = JSON.stringify(localStorageGhost);

    localStorage.setItem(GHOSTS, stringyLocalDice);
}