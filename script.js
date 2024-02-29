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

            let color = getRandomColor();

            e.target.style.backgroundColor = color;

        });


        gridContainer.appendChild(gridSquare);

    }

}

function getRandomColor() {

    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);

    let color = "rgb(" + R + "," + B + "," + G + ")";

    return color;

}

function applyGradient(gridSquare) {

    let currentRgb = gridSquare.style.backgroundColor;

    let rgbValues = currentRgb.match(/\d+/g); // extract rgb values from the string

    // current rgb values, want to darken and return back a whole string to update style property
    let r = rgbValues[0];
    let b = rgbValues[1];
    let g = rgbValues[2];

    console.log("R: " + r);
    console.log("B: " + b);
    console.log("G: " + g);


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
createGrid(DEFAULT_SIZE);