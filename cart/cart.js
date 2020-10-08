
import {  cartStuff } from '../products/data.js';
import { renderTableRow } from './cart-utils.js';
import { getFromLocalStorage } from './helper-functions.js';

const ul = document.querySelector('#list');

for (let i = 0; i < souls.length; i++) {
    const soul = souls[i];

    const li = renderSouls(soul);

    ul.appendChild(li);    
}


const table = document.querySelector('#tbody');

const cart = getFromLocalStorage('CART') || [];

for (let i=0; i < cartStuff.length; i++) {

    const soul = cartStuff[i];

    const tr = renderTableRow(soul);

    table.appendChild(tr);


}

const orderButton = document.getElementById('order-button');


orderButton.addEventListener('click', () => {

   
 console.log('click')

})


