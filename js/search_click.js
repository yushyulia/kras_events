let search_input = document.querySelector('input[name=search]')
let search_btn = document.querySelector('.search-form__button')
let date_picker = document.querySelector('input[name=date_picker]')


window.addEventListener('keydown', e => {
    if (e.keyCode == 13) search_btn.click()
})

search_btn.addEventListener('click', () => {
  if(search_input.value != ""){
    window.open('search.html?&'+search_input.value)
  }
  else{
    alert("Пустая строка")
  }
})

function search_by_date(){
  window.open('search.html?&'+date_picker.value)
}
