function renderGhosts(ghost) {
    const li = document.getElementById('li');
    li.className = ghost.category;
    li.title = ghost.description;

    const h3 = document.createElement('h3');
    h3.textContent = ghost.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + ghost.image;
    img.alt = ghost.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + ghost.price.toFixed(2);

    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = ghost.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderGhosts;