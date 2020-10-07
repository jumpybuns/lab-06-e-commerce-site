import { ghosts } from '../data/ghosts.js';
// import { cart } from '../data/cart.js';
import { renderTableRow } from './cart-utils.js';
import { findById, getFromLocalStorage, CART } from '../Utils.js';

const table = document.querySelector('tbody');
const addToCartButton = document.querySelector('button');

const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const ghost = cart[i];
    
    const tr = renderTableRow(ghost);

    table.appendChild(tr);
}

const total = calculateTotal(cart);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

export function calculateTotal(cartArray) {
    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const realItem = findById(ghosts, item.id);

        const subtotal = realItem.price * item.quantity;

        accumulator = accumulator + subtotal;
    }
    return accumulator;
}

addToCartButton .addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);
    
    localStorage.clear();
    window.location.href = '/';

});
