const container = document.getElementById('container');
const changeSizeBtn = document.getElementById('changeSizeButton');

let gridSize = 16;

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter",
            () => square.style.backgroundColor = 'black');

        container.appendChild(square);
    }
}

function changeGridSize() {
    let newSize = prompt("Enter new square quantity per side", 16);
    newSize = parseInt(newSize);
    if (newSize > 0 || newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    } else if (newSize > 100) {
        console.log("Maximum squares per side is 100!");
    } else {
        console.log("Wrong input. Enter a number between 1 and 100.");
    }
}

changeSizeBtn.addEventListener("click", changeGridSize);

createGrid(gridSize);
