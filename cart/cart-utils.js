
import { cartStuff } from '../products/data.js';

export function renderTableRow (cartItem) {

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    
    const soulData = findById(cartItem.id);

    const price = cartItem.price;
    
    console
    tdPrice.textContent = `$${price}`;
    tdName.textContent = cartItem.name;
    
    tdTotal.textContent = `$${price * cartItem.quantity}`;
    
    tr.append(tdName, tdPrice, tdQuantity, tdTotal);


    return tr;

}

export function findById(soulArray, soulId) {

    for ( let i = 0; i < soulArray.length; i++){
        const item = soulArray[i]
        if (item.id === soulId){
            return item;
        }

        
    }

    return null;

}


export function calcLineItem(quantity, price){
    const amount = quantity * price;
    return amount;
}




export function calcOrderTotal(cartArray) {

    let accumulator = 0;

    for (let i = 0;i < cartArray.length; i++) {
        const item = cartArray[i];
        
        const subtotal = item.price * item.quantity;

        accumulator = accumulator + subtotal;
    }
    return accumulator;
}