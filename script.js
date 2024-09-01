const container = document.querySelector('.container');
container.style.cssText = "display: flex";

const button = document.querySelector('button');

for (let i = 1; i <= 256; i++) {
    let item = document.createElement('div');
    item.classList.add("gridItem");
    item.dataset.cell = i;
    container.appendChild(item);
}

// Randomizer for RGB value (return random number between 0-255)
function randomRGB() {
    return Math.floor((Math.random() * 256));
}

// Grid generator
function gridGenerator(size) {
    // Delete grid
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    // Set container height and width according to grid size
    let gridLength = size*40;
    container.style.height = `${gridLength}px`;
    container.style.width = `${gridLength}px`;
    for (let i = 1; i <= size*size; i++) {
        let item = document.createElement('div');
        item.classList.add("gridItem");
        item.dataset.cell = i;
        container.appendChild(item);
    }
}
// Generate first grid automatically
gridGenerator(16);

// Identify each cell when hovering over with mouse
container.addEventListener('mouseover', (e) => {
    console.log('hovered ' + e.target.dataset.cell);
    let red = randomRGB();
    let green = randomRGB();
    let blue = randomRGB();
    console.log("Red is: " + red + " Green is: " + green + " Blue is: " + blue);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

button.addEventListener('click', (e) => {
    let gridSize = prompt("Enter grid size:", 16);
    gridGenerator(gridSize);
});