function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divContainer = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
  input.value = '0';
});

function createBoxes(amount) {
  const boxItems = [];
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement('div');
    item.style.width = `${30 + i * 10}px`;
    item.style.height = `${30 + i * 10}px`;
    item.style.backgroundColor = getRandomHexColor();
    boxItems.push(item);
  }
  divContainer.append(...boxItems);
}

function destroyBoxes() {
  divContainer.innerHTML = '';
}
