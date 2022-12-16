let login = document.querySelector('input[name=login]')
let password = document.querySelector('input[name=password]')
let login_button = document.querySelector('button[name=login_button]')

login_button.addEventListener('click', () => {

    if (login.value == 'admin' && password.value == '12345') {
        window.location.href = 'event_list.html'
    }
    else alert('Неправильный логин или пароль');
})
