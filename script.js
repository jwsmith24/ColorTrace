

const gridContainer = document.querySelector('#gridContainer');

let gridLength = 100;



for (let i = 0; i < gridLength; i++) {

    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grids');
    gridSquare.addEventListener('mouseover', (e) => {

        e.target.classList.add('hoverEffect');

    });


    gridContainer.appendChild(gridSquare);

}


