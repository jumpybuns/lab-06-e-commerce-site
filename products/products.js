
import ghosts from '../data/ghosts.js';
import renderGhosts from './render-ghost.js';

const ul = document.getElementById('ghosts');

for (let i = 0; i < ghosts.length; i++) {
    const ghost = ghosts[i];
    const li = renderGhosts(ghost);
    ul.appendChild(li);
}

