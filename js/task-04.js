let counterValue = 0;
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterSpan = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
});
