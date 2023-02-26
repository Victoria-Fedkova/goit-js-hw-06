function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = body.querySelector('.change-color');
const colorName = body.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
});
