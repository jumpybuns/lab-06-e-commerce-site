import ghosts from '../data/ghosts.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

const initializedEmptyCart = '[]';
const cartInLocalStorage = localStorage.getItem('CART') || initializedEmptyCart;
const cart = JSON.parse(cartInLocalStorage);

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const ghost = findById(ghosts, lineItem.id);
    const dom = renderLineItem(lineItem, ghost);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, ghosts);
orderTotalCell.textContent = toUSD(orderTotal);


if (cart.length === 0) {

    placeOrderButton.disabled = true;
}
else {

    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}