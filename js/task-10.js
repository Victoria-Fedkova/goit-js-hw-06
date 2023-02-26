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
  if (!input.value) {
    alert('Забув число?');
  } else if (!Number(input.value)) {
    alert('Вважай, що вже намалював!');
  }
  createBoxes(input.value);
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
  input.value = '0';
});

function createBoxes(amount) {
  let elementWidth = 30;
  let elementHeight = 30;
  if (divContainer.lastElementChild) {
    elementWidth = parseInt(divContainer.lastElementChild.style.width) + 10;
    elementHeight = parseInt(divContainer.lastElementChild.style.height) + 10;
  }
  const boxItems = [];
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement('div');
    item.style.width = `${elementWidth + i * 10}px`;
    item.style.height = `${elementHeight + i * 10}px`;
    item.style.backgroundColor = getRandomHexColor();
    boxItems.push(item);
  }
  divContainer.append(...boxItems);
}

function destroyBoxes() {
  divContainer.innerHTML = '';
}
