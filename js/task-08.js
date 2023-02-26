const formSubmit = document.querySelector('.login-form');
formSubmit.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const obj = {
    email: email.value,
    password: password.value,
  };

  if (!obj.email || !obj.password) {
    alert('Всі поля мають бути заповнені!');
    return;
  }
  console.log(obj);
  formSubmit.reset();
});
