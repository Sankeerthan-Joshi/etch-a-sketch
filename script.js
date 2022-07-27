
let gridEle;
let grid;
let className;
let selector;
for(let i=0; i<16; i++){
    grid = document.createElement('div');
    className = 'container' + i;
    grid.setAttribute('class','container');
    document.body.appendChild(grid);
    for(let j=0;j<16;j++){
        gridEle = document.createElement('div');
        gridEle.setAttribute('class', 'item');
        selector = '.'+className;
        grid.append(gridEle);
    }

}