
import { cart } from '../data.js';
import { renderTableRow } from './cartUtils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < souls.length; i++) {
    const soul = souls[i];

    const li = renderSouls(soul);

    ul.appendChild(li);    
}