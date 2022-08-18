const dimensions = 16;
const square = document.querySelector('.square');
const pixel = document.createElement('div');
pixel.classList.add('pixel');

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

let isMouseDown = false;
const pixels = Array.from(document.querySelectorAll('.pixel'));

square.addEventListener('mousedown', () => isMouseDown = true);
square.addEventListener('mouseup', () => isMouseDown = false);
square.addEventListener('mouseleave', () => isMouseDown = false);

pixels.forEach(pxl => pxl.addEventListener('mouseover', event => {
  if (!isMouseDown) return;
  console.log(event.target);
}))