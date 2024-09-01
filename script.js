const container = document.querySelector('.container');
container.cssText = "display: flex";

for (let i = 1; i <= 256; i++) {
    let item = document.createElement('div');
    item.classList.add("gridItem");
    container.appendChild(item);
}