//each button and h1 with different bg and text color
const randomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');
for(let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for(let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor=randomColor();
    this.style.color=randomColor();
}

//Lecture 259 for one button
/* const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() { 
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const color = `rgb(${r}, ${b}, ${g})`;
    document.body.style.backgroundColor = color;

    const h1Color = `rgb(${g}, ${b}, ${r})`;
    h1.style.color = h1Color;
    }
) */
 

//created 100 buttons using DOM
/* const container = document.getElementById("container");

for(let i = 0; i < 100; i++){
    const button = document.createElement("button");
    container.appendChild(button);
    button.innerText = "Hey!";
} */