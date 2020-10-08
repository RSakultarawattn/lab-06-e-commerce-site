import { souls } from './data.js';
import { renderSouls } from './utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < souls.length; i++) {
    const soul = souls[i];

    const li = renderSouls(soul);
console.log(li)
    ul.appendChild(li);    
}