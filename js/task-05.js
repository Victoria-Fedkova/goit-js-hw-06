const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');
input.addEventListener('input', () => {
  const inputValue = input.value;
  console.log(inputValue);
  name.textContent = inputValue ? inputValue : 'Anonymous';
});
