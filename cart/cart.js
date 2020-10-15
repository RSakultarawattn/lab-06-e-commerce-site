
import {  cartStuff } from '../products/data.js';
import { CART } from '../products/utils.js';
import { renderTableRow, calcOrderTotal } from './cart-utils.js';
import { getFromLocalStorage } from './helper-functions.js';


const tr = document.querySelector('#list');




const table = document.querySelector('#list');

const cart = getFromLocalStorage('CART') || [];
const cartTotal = calcOrderTotal(cart)
console.log(cartTotal)

for (let i=0; i < cart.length; i++) {

    const soul = cart[i];

    const tr = renderTableRow(soul);
    
    table.appendChild(tr);
    


}


const total = document.querySelector('#total');
total.textContent = cartTotal

const orderButton = document.getElementById('order-button');


orderButton.addEventListener('click', () => {

    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);


    localStorage.clear();
    window.location.href = '/';
   
 

});


