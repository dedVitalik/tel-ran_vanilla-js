document.querySelector('#black-bc-btn').addEventListener('click', () => {
    document.body.style.backgroundColor = 'black'
})

const colours = ['red', 'green', 'white'];
let colourIndex = 0;

document.querySelector('#random-bc-btn').addEventListener('click', () => {
    //let newColour = colours[(Math.floor(Math.random()*colours.length))];
    document.body.style.backgroundColor = colours[0];
    colours.push(...colours.splice(0, 1));
})