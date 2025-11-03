const container = document.getElementById('container');
const changeSizeBtn = document.getElementById('button');

        const gridSize = 16;

        function createGrid(size) {
            for (let i = 0; i < size * size; i++) {
                const square = document.createElement('div');
                square.classList.add('grid-square');
                container.appendChild(square);
            }
        }
        createGrid(gridSize);