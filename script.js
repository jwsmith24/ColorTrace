// elements to update
const gridContainer = document.querySelector('#gridContainer');
const resizeButton = document.querySelector('#resize');
const resetButton = document.querySelector('#reset');
const gradientButton = document.querySelector("#gradient");
const buttonContainer = document.querySelector('#buttonContainer');

// constants
const DEFAULT_SIZE = 10;


// starting grid size is 10
let gridSize = DEFAULT_SIZE;
let numberOfGrids = gridSize * gridSize;
let CONTAINER_SIZE = 600;
let dynamicGrid = (CONTAINER_SIZE / gridSize);

let gradientMode = false;
let gradientIsDark = true;


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

            let element = e.target;
            let color = getRandomColor();

            element.style.backgroundColor = color;

            // reduce brightness by 10% on each hover
            if (gradientMode === true) {

                adjustBrightness(element);

            }

        });


        gridContainer.appendChild(gridSquare);

    }

}

function adjustBrightness(element) {
    let currentBrightness = getCurrentBrightness(element);
    let newBrightness;

    if (gradientIsDark) {
        newBrightness = currentBrightness - 0.1; // reduce brightness by 10%
    } else {
        newBrightness = currentBrightness + 0.1; // increase brightness by 10%;
    }


    element.style.filter = `brightness(${newBrightness})`;

}


function getCurrentBrightness(element) {
    let brightnessValue = window.getComputedStyle(element).getPropertyValue('filter');
    let brightnessMatch = brightnessValue.match(/brightness\((\d+(\.\d+)?)\)/);

    return brightnessMatch ? parseFloat(brightnessMatch[1]) : 100;
}

function toggleGradientMode() {
    gradientMode = !gradientMode;

    if (gradientMode === true) {
        console.log("Gradient mode is on!");
        gradientButton.textContent = "Gradient Mode: On";
        createInverseButton();
    } else {
        console.log("Gradient mode is off!");
        gradientButton.textContent = "Gradient Mode: Off";
    }
}


function createInverseButton() {
    const inverseButton = document.createElement('button');
    inverseButton.id = "inverseButton";
    inverseButton.textContent = "Invert Gradient: Dark";
    buttonContainer.appendChild(inverseButton);

}

function getRandomColor() {

    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);

    let color = "rgb(" + R + "," + B + "," + G + ")";

    return color;

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


gradientButton.addEventListener('click', () => {
    toggleGradientMode();
})

// reset to default size
resetButton.addEventListener('click', () => {
    createGrid(DEFAULT_SIZE);
})


// initialize grid on load
createGrid(DEFAULT_SIZE);