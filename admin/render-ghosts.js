import { findById } from '../utils.js';
import { toUSD } from '../utils.js';

function renderGhosts(ghost) {
    const li = document.createElement('li');
    li.className = ghost.category;
    li.title = ghost.description;

    const h3 = document.createElement('h3');
    h3.textContent = ghost.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + ghost.image;
    img.alt = ghost.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(ghost.price);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = ghost.id;
    button.addEventListener('click', () => {
      
        const initializedEmptyCart = '[]';
        const cartInLocalStorage = localStorage.getItem('CART') || initializedEmptyCart;
        const cart = JSON.parse(cartInLocalStorage);

 
        let itemInCart = findById(cart, ghost.id);


        if (!itemInCart) {
           
            const initializedCartItem = {
          
                id: ghost.id,
                quantity: 1
            };

            cart.push(initializedCartItem);
        }
        else {
       
            itemInCart.quantity++;
        }


        const stringCart = JSON.stringify(cart);

        localStorage.setItem('CART', stringCart);

      
        alert('1 ' + ghost.name + ' added to cart');

    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderGhosts;