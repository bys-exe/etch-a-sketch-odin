const container = document.getElementById('container');
const grid = document.getElementsByClassName('grid');
makeGrid(16);
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let gridPrompt = prompt('Enter the grid you want (1-100), e.g. 5 for 5x5:');
    gridPrompt = parseInt(gridPrompt);
    while (gridPrompt > 100 || gridPrompt <= 0 || isNaN(gridPrompt)) {
        alert('Choose a number between 1–100 only');
        gridPrompt = parseInt(prompt('Enter the grid you want (1-100), e.g. 5 for 5x5:'));
    }
    makeGrid(gridPrompt);
});
function makeGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('divs');
        div.style.flexBasis = `${100 / size}%`;
        div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#26667F';
        });
        container.appendChild(div);
    }
}
grid.innerHTML = `The grid is ${gridPrompt}x${gridPrompt} now.`

