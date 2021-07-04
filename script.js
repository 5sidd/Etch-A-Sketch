let container = document.querySelector('.container');
/*
let num = Number(prompt("Enter side dimensions: "));
createGrid(num);
*/
const dimensions = document.querySelector('#dimensions');
const size = document.querySelector('#size');
size.textContent = "Size: 1";
createGrid(1);
const changeSize = document.querySelector('#change-size');
const clear = document.querySelector('#clear');

dimensions.oninput = function() {
    size.textContent = "Size: ";
    size.textContent = size.textContent + dimensions.value;
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let temp = size.textContent.split(" ");
    createGrid(temp[1]);
}

function createGrid(sides) {
    for (let i = 0; i < sides ** 2; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.style.border = "solid";
        cell.style.borderWidth = "0.5px";
        cell.onmouseover  = function() {
            randomColor(cell);
        };
        container.appendChild(cell);
    }
    container.style.gridTemplateColumns = "repeat( " + sides + ", minmax(0, 1fr))";
    container.style.gridTemplateRows = "repeat( " + sides + ", minmax(0, 1fr))";

    return container;
}


function randomColor(cell) {
    let red = Math.floor(Math.random() * 266);
    let green = Math.floor(Math.random() * 266);
    let blue = Math.floor(Math.random() * 266);
    cell.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}