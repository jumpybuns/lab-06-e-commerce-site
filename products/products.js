import ghosts from '..data/ghosts.js';
import renderGhosts from './render-ghosts.js';

const unorderedListElements = document.getElementById('ghosts');

for (let i = 0; < ghosts.length; i++) {
    const ghost = ghosts[i];
    const elementsList = renderGhosts(ghost);
    unorderedListElements.appendChild(elementsList);
}