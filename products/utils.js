

/*
for (let i = 0; i < someArray.length; i++)
if (someArray[i].id === someId) {
    return someArray[i]

*/



export function renderSouls(souls) {

    const li = document.createElement('li');
    const id = document.createElement('p');
    const name = document.createElement('p');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.classList.add('souls');

    //li.id = souls.id


    //id.classList.add('id');
    //id.textContent = souls.id;
    //li.appendChild(id);
    
   
    name.classList.add('name');
    name.textContent = souls.name;
    li.appendChild(name);
    

    
    image.classList.add('image');
    image.src = `../assets/${souls.image}`;
    li.appendChild(image);

    

    description.classList.add('description');
    description.textContent = souls.description;
    li.appendChild(description);

    

    price.classList.add('price');
    price.textContent = `$${souls.price}`;
    li.appendChild(price);


    button.textContent = 'Add to cart';
    li.appendChild(button);
    
    return li;

}