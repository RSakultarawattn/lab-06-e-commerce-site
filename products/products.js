
import { renderSouls } from './utils.js';
import { getLocalStorageSouls } from './utils.js';
const souls = getLocalStorageSouls();
const ul = document.querySelector('#list');

for (let i = 0; i < souls.length; i++) {
    const soul = souls[i];

    const li = renderSouls(soul);

    ul.appendChild(li);    
}