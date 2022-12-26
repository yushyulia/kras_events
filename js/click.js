let subs = document.querySelector('input[name=subscription_input]');

function successfulSub() {
  if(subs.checkValidity()){
    alert("К сожалению, сейчас эта функция недоступна");
  }
}

function successfulForm() {
    alert("Форма успешно отправлена");
}
