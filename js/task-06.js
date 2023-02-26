const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
  const text = input.value;
  const length = input.dataset.length;
  if (text.length === Number(length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
