const canvas = document.getElementById('canvas');

let size = 30;
let color = 'black';
resetGrid(size, color);



const b_changeSize = document.getElementById('b_gridSize');
b_changeSize.addEventListener('click', ()=>{
    let count = prompt("Enter grid size:");
    size = count;
    resetGrid(size, color);
});
function resetGrid(count, color){
    
    canvas.innerHTML='';
for(let i = 0; i<count*count; i++){

    const grid = document.createElement('div');
    grid.style.width = `${480 / count}px`;
        grid.style.height = `${480 / count}px`;
        grid.classList.add('littles');
        grid.addEventListener('mouseover', ()=>{
            grid.style.backgroundColor = color;
        })
        


    canvas.appendChild(grid);

}
}
// Get all elements with class "littles"


// Iterate and log each element



const b_black = document.getElementById('b_black');
b_black.addEventListener('click', ()=>{
    const littles = document.querySelectorAll('.littles');
    color = 'black';
    littles.forEach(element => {
        element.addEventListener('mouseover', ()=>{
            element.style.backgroundColor = color;
        })
    });
});


const b_white = document.getElementById('b_white');
b_white.addEventListener('click', ()=>{
    const littles = document.querySelectorAll('.littles');
    color = 'white';
    littles.forEach(element => {
        element.addEventListener('mouseover', ()=>{
            element.style.backgroundColor = color;
        })
    });
});

const b_random = document.getElementById('b_random');
b_random.addEventListener('click', ()=>{
    const littles = document.querySelectorAll('.littles');
    littles.forEach(element => {
        element.addEventListener('mouseover', ()=>{
            element.style.backgroundColor = randomColor();
        })
    });
});


function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const b_clear = document.getElementById('b_clear');
b_clear.addEventListener('click', ()=>{
    const littles = document.querySelectorAll('.littles');
    canvas.innerHTML='';
    color='white';
    littles.forEach(element => {
        element.style.backgroundColor = color;
        canvas.appendChild(element);
    });
})