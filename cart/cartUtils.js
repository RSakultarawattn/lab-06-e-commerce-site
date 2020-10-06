


export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdName =document.createElement('td');
    const tdPrice =document.createElement('td');
    const tdQuantity =document.createElement('td');
    const tdTotal =document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;


    const soulData = findById(sourceOfTruth, cartItem.id);

    const price = soulData.price;
    const title = soulData.name;

    tdPrice.textContent = `$${price}`;
    tdName.texContent = title;
    tdTotal.textContent = `$${price * cartItem.quantity}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);


    

}