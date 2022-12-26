let login = document.querySelector('input[name=login]')
let password = document.querySelector('input[name=password]')
let login_button = document.querySelector('button[name=login_button]')


login_button.addEventListener('click', () => {
  if (login.value == 'admin' && password.value == '12345') {
    event.preventDefault()
    window.location.href = 'event_list.html'
  }
  else if (login.value && password.value) {
    alert("Неправильный логин или пароль")
  }
});
