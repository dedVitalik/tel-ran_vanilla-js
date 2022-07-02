const changingButton = document.querySelector('button');

const mode = localStorage.getItem('mode') ?? 'light';
if (mode === 'dark') {
    document.body.classList.add('dark');
}


changingButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
})


const incBtn = document.querySelector('button ~ button');
const decBtn = document.querySelector('button ~ button ~ button');
const elemToChangeFont = document.querySelector('body p');
let fontSize = 25;
const changeFontSize = newSize => {
    elemToChangeFont.style.fontSize = newSize + 'px';
}
changeFontSize(fontSize);

incBtn.addEventListener('click', () => {
    changeFontSize(++fontSize);
})

decBtn.addEventListener('click', () => changeFontSize(--fontSize));



// colour buttons
const btns = document.querySelectorAll('button.yellow, button.red, button.green');

btns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log(evt.target.className);
    }
)}


)