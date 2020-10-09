const form = document.querySelector('form');
import { PRODUCTS } from './constants.js';
import { getLocalStorageSouls } from '../utils.js';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const quantity = data.get('quantity');
    const price = data.get('price');

console.log('submit')
    const newSoul = {

        id: id,
        name: name,
        image: image,
        quantity: quantity,
        price: Number(price),

        


    };

    const localStorageSouls = getLocalStorageSouls();
    localStorageSouls.push(newSoul);

    const stringyLocalSouls = JSON.stringify(localStorageSouls);
    localStorage.setItem(PRODUCTS, stringyLocalSouls);

});