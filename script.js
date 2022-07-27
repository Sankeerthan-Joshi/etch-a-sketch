


// To resize grid
function resize(){
    
    size = window.prompt('Size?');
    container.innerHTML = ''
    createGrid(size)
}
document.querySelector('button').addEventListener('click', resize)

let container = document.querySelector('.grid');

function createGrid(size){
let gridEle;
let grid;
for(let i=0; i<size; i++){
    grid = document.createElement('div');
    grid.setAttribute('class','container');
    container.appendChild(grid);
    for(let j=0;j<size;j++){
        gridEle = document.createElement('div');
        gridEle.setAttribute('class', 'item');
        grid.append(gridEle);
    }

}
}

// Default grid of 16x16
createGrid(16);