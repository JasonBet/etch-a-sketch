const container = document.querySelector('.container');
container.style.cssText = "display: flex";

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

// Identify each cell when hovering over with mouse
container.addEventListener('mouseover', (e) => {
    console.log('hovered ' + e.target.dataset.cell);
    let red = randomRGB();
    let green = randomRGB();
    let blue = randomRGB();
    console.log("Red is: " + red + " Green is: " + green + " Blue is: " + blue);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

