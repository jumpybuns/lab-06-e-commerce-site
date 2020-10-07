import { findById, CART, ghost } from "../Utils";

function renderGhosts(ghost) {
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
    button.textContent = 'Add to Cart';
    button.value = ghost.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderGhosts;


const button = document.createElement('button');
button.textContent = 'Add to cart';

button.addEventListener('click', () => {

    const cart = getFromLocalStorage(CART) || [];
    const itemInCart = findById(cart, ghost.id);

    if (itemInCart === undefined) {

        const lineItem = {
            id: ghost.id,
            quantity: 1,
        };
        cart.push(lineItem);
    } else {
        itemInCart.quantity++;
    }
    setInLocalStorage(CART, cart);
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