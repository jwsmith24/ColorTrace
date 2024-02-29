

const gridContainer = document.querySelector('#gridContainer');


const gridSize = 10;
let numberOfGrids = gridSize * gridSize;

// container is 600x600px
let CONTAINER_SIZE = 600;

// dynamically calculate size
let dynamicGrid = (CONTAINER_SIZE / gridSize);


for (let i = 0; i < numberOfGrids; i++) {

    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grids');
    gridSquare.style.width = dynamicGrid + 'px';
    gridSquare.style.height = dynamicGrid + 'px';


    gridSquare.addEventListener('mouseover', (e) => {

        e.target.classList.add('hoverEffect');

    });


    gridContainer.appendChild(gridSquare);

}


