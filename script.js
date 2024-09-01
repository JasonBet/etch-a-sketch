const container = document.querySelector('.container');
container.style.cssText = "display: flex";

for (let i = 1; i <= 256; i++) {
    let item = document.createElement('div');
    item.classList.add("gridItem");
    item.id = i;
    container.appendChild(item);
}

container.addEventListener('mouseover', (e) => {
    console.log('clicked ' + e.target.id);
});