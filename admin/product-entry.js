// import { GHOSTS } from '../constants.js';
import { addProduct } from '../utils.js';


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const photo = data.get('photo');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');

    const newGhost = {
        id: id,
        name: name,
        photo: photo,
        description: description,
        category: category,
        price: Number(price),
    };
    addProduct(newGhost);

    form.reset();
});