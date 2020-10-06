import { ghosts } from '../data/ghosts.js';
import { findById } from '../Utils.js';


export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');




    tdQuantity.textContent = cartItem.quantity;

    // we need the name and the price
    // the name and proce live in the source of Truth
    // we should ise our findByuId fucntion to get the data from the source of truth
    const ghostData = findById(ghosts, cartItem.id);
    const price = ghostData.price;
    const title = ghostData.title;

    price.textContent = `$${price}`;
    title.textContent = title;

    const total = price * cartItem.quantity;

    tdTotal.textContent = `$${total}`;
    
    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}