import { ghosts } from '../data/ghosts.js';
import { cart } from '../data/cart.js';
import { renderTableRow } from './cart-utils.js';
import { findById } from '../Utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const ghost = cart[i];
    const tr = renderTableRow(ghost);

    table.appendChild(tr);
}

const total = calculateTotal(cart);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

function calculateTotal(cartArray) {
    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const realItem = findById(ghosts, item.id);

        const subtotal = realItem.price * item.quantity;

        accumulator = accumulator + subtotal;
    }
    return accumulator;
}



