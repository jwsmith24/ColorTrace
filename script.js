

const gridContainer = document.querySelector('#gridContainer');

let gridLength = 100;



for (let i = 0; i < gridLength; i++) {

    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grids');


    gridContainer.appendChild(gridSquare);

}


