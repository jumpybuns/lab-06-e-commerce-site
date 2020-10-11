import renderGhosts from './render-ghost.js';
import { seedAndGetProducts } from '../utils.js'; 

const ul = document.getElementById('ghosts');

const ghostList = seedAndGetProducts();

for (let i = 0; i < ghostList.length; i++) {
    const ghost = ghostList[i];
    const li = renderGhosts(ghost);
    ul.appendChild(li);
}

