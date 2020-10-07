
import { souls } from '../products/data.js';

export function renderTableRow(souls, cartItem) {

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;


    const soulData = findById(souls, cartItem.id);

    const price = soulData.price;
    

    tdPrice.textContent = `$${price}`;
    tdName.textContent = soulData.name;
    
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