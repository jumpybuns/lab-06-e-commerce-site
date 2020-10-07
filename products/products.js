import { ghosts } from '../data/ghosts.js';
import { renderGhosts } from '../Utils.js';

const unorderedListElements = document.getElementById('ghosts');

for (let i = 0; i < ghosts.length; i++) {
    const ghost = ghosts[i];
    const el = renderGhosts(ghost);
    unorderedListElements.appendChild(el);
}