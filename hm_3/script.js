const buttonIncrElem = document.querySelector('.btn_incr');

const buttonDecrElem = document.querySelector('.btn_decr');

let value = 0;

function render () {
    document.querySelector('.result').innerText = value;
}

buttonIncrElem.addEventListener('click', function() {
    value++;
    render();
})

buttonDecrElem.addEventListener('click', function() {
    value--;
    render();
})


const productFormElem = document.querySelector('form');
const products = [];
productFormElem.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const {title, price} = evt.target;
    products.push({
        title: title.value,
        price: price.value
    })
})


