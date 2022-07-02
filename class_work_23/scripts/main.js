// const blueGreenButton = document.querySelector('button.btn-blue, button.btn-green');
//
// if (!localStorage.getItem('blueGreenBtnClass')) {
//     localStorage.setItem('blueGreenBtnClass', 'btn-blue');
// }
// let blueGreenBtnClass = localStorage.getItem('blueGreenBtnClass');
// blueGreenButton.classList.toggle(blueGreenBtnClass);
//
// blueGreenButton.addEventListener('click', () => {
//     blueGreenButton.classList.toggle('btn-blue');
//     blueGreenButton.classList.toggle('btn-green');
//     console.log(blueGreenButton.classList);
//     // localStorage.setItem('blueGreenBtnClass', 'btn-blue');
// })



const resultedElem = document.querySelector('.result');
let result = +localStorage.getItem('result');
resultedElem.innerText = result;

const incBtn = document.querySelector('.inc');
const decBtn = document.querySelector('.dec');

incBtn.addEventListener('click', () => {
    resultedElem.innerText = ++result;
    localStorage.setItem('result', result)
})

decBtn.addEventListener('click', () => {
    resultedElem.innerText = --result;
    localStorage.setItem('result', result)
})
