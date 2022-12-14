const square = document.querySelector('.square');
const pixel = document.createElement('div');
pixel.classList.add('pixel');

const range = document.querySelector('#range');
const label = document.querySelector('#label');
let dimensions = range.value;
let isMouseDown = false;
let hue = 0;

const reset = () => {
  dimensions = 16;
  isMouseDown = false;
  hue = 0;
  label.textContent = dimensions;
  range.value = dimensions;
  renderPixels(dimensions);
  drawPixels();
};

square.addEventListener('mousedown', () => isMouseDown = true);
square.addEventListener('mouseup', () => isMouseDown = false);
square.addEventListener('mouseleave', () => isMouseDown = false);

const renderPixels = dimensions => {
  Array.from(square.children).forEach(child => square.removeChild(child));
  for (let i = 0; i < dimensions; ++i) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < dimensions; ++j) {
      const child = document.createElement('div');
      child.classList.add('pixel');
      row.appendChild(child);
    }
    square.appendChild(row);
  }
};

const drawPixels = () => {
  const pixels = Array.from(document.querySelectorAll('.pixel'));
  pixels.forEach(pxl => pxl.addEventListener('mouseover', () => {
    if (!isMouseDown) return;
    pxl.style.background = `hsl(${++hue}, 50%, 50%)`;
  }));
};

range.addEventListener('input', event => {
  label.textContent = event.target.value;
  dimensions = event.target.value;
});

range.addEventListener('change', () => {
  renderPixels(dimensions);
  drawPixels();
});

reset();