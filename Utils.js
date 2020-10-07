
export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {
    const totalLine = quantity * price;
    return totalLine(Math.round(price * 100) / 100);
}

export const CART = 'CART';

export function renderGhosts(ghost) {
    const li = document.createElement('li');
    li.classList.add(ghost.category);
    li.title = ghost.description;

    const h3 = document.createElement('h3');
    h3.textContent = ghost.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + ghost.image;
    img.alt = `${ghost.name}image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${ghost.price.toFixed(2)}`;

    const button = document.createElement('button');
    const removeButton = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = ghost.code;
    p.appendChild(button);

    li.appendChild(p);


    button.textContent = 'Add to Cart';

    button.addEventListener('click', () => {

        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, ghost.id);

        if (itemInCart === undefined) {

            const newCartItem = {
                id: ghost.id,
                quantity: 1,
            };
            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }
        setInLocalStorage(CART, cart);
    });
    
    removeButton.textContent = 'remove one';

    removeButton.addEventListener('click', () => {
        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, ghost.id);

        if (itemInCart) {
            if (itemInCart.quantity !== 0) {
                itemInCart.quantity--;
            }
        }


    });

    li.appendChild(button);
    li.appendChild(removeButton);
    
    return li;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}