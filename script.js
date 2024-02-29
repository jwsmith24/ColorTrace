// elements to update
const gridContainer = document.querySelector('#gridContainer');
const resizeButton = document.querySelector('#resize');
const resetButton = document.querySelector('#reset');

const DEFAULT_SIZE = 10;


// starting grid size is 10
let gridSize = DEFAULT_SIZE;
let numberOfGrids = gridSize * gridSize;
let CONTAINER_SIZE = 600;
let dynamicGrid = (CONTAINER_SIZE / gridSize);


function createGrid(size) {

    // clear contents of exisiting grid
    gridContainer.innerHTML = '';

    gridSize = size;
    numberOfGrids = gridSize * gridSize;

    dynamicGrid = (CONTAINER_SIZE / gridSize);

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

}


resizeButton.addEventListener('click', () => {

    let newSize = prompt("Enter number of squares: ");

    if (newSize != null) {
        newSize = parseInt(newSize);

        if (!isNaN(newSize) && newSize > 0) {
            createGrid(newSize);
        } else {
            alert("Enter a real, positive number");
        }
    }

});

// reset to default size
resetButton.addEventListener('click', () => {
    createGrid(DEFAULT_SIZE);
})


// initialize grid on load
createGrid(10);