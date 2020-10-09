
import { getLocallyStoredGhosts, renderGhosts } from '../Utils.js';

const localStorageGhosts = getLocallyStoredGhosts();

const ul = document.querySelector('ghosts');

for (let i = 0; i < localStorageGhosts.length; i++) {
    const ghost = localStorageGhosts[i];
    const li = renderGhosts(ghost);
    ul.appendChild(li);
}

