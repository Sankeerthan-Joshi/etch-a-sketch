


// To resize grid
function resize(){
    
    size = window.prompt('Size?');
    if(!size){return null}
    if(size>=100){window.alert('Should be less than 100'); return null}
    container.innerHTML = ''
    createGrid(size);
    dragEventAdder();
}
document.querySelector('#resize').addEventListener('click', resize)

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

// default drag event adding for each item
dragEventAdder();

// -------------------------------------------------------- ON DRAG ---------------------------------------------------------


// Adding black bg to the item when dragged on it
function dragEventAdder(){
    let items = document.querySelectorAll('.item')
items.forEach(element => {
    
    element.addEventListener('dragstart', (e)=>(e.path[0].classList.add('drag')))
    element.addEventListener('dragover', (e)=>(e.path[0].classList.add('drag')))
});
}

// -----------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------- ZOOM ---------------------------------------------------------

let zoom;
// Multiply width and height with entered value and set width and height of grid container with that value
function onZoom(){
    zoom = window.prompt('How many times?');
    style = 'width: '+(zoom*500 )+'px; height: '+(zoom*500)+'px;';
    document.querySelector('.grid').setAttribute('style', style)
}

// Click event for zoom button
document.querySelector("#zoom").addEventListener('click', onZoom)
// -----------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------- CLEAR ---------------------------------------------------------
function clear(){
    let items = document.querySelectorAll('.item')
items.forEach(element => {
    element.classList.remove('drag')
});
}

document.querySelector('#clear').addEventListener('click', clear);
// -----------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------- ERASE ---------------------------------------------------------

function eraser(){

    let items = document.querySelectorAll('.item')
items.forEach(element => {
    element.classList.toggle('item-erase');
    // element.addEventListener('dragstart', (e)=>(e.path[0].classList.toggle('drag')))
    element.addEventListener('dragover', (e)=>(e.path[0].classList.toggle('drag')))
});
}
document.querySelector('#erase').addEventListener('click', eraser);

