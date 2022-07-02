const itemsCollection = document.querySelector('.items-list');

const formHandler = (evt) => {
    evt.preventDefault();
    itemsCollection.insertAdjacentHTML('beforeend',
        `<li><p>${evt.target.name.value}</p><p>${evt.target.price.value}</p></li>`);
}

document.querySelector('.add-item-form').addEventListener('submit', formHandler);
