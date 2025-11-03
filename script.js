const container = document.getElementById('container');
const changeSizeBtn = document.getElementById('button');

        const gridSize = 16;

        function createGrid(size) {
            //Полное обновление сетки. Удаляем ранее созданную сетку.
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
        createGrid(gridSize);
