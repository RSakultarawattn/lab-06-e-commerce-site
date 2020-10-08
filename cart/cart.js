
import {  cartStuff } from '../products/data.js';
import { renderSouls } from '../products/utils.js';
import { renderTableRow } from './cart-utils.js';
import { getFromLocalStorage } from './helper-functions.js';

const tr = document.querySelector('#list');




const table = document.querySelector('#list');

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


