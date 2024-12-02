const canvas = document.getElementById('canvas');

let count = 40;
for(let i = 0; i<count*count; i++){

    const grid = document.createElement('div');
    grid.style.width = `${480 / count}px`;
        grid.style.height = `${480 / count}px`;

    canvas.appendChild(grid);

}