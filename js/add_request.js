let input_title = document.querySelector('input[name=title]')
let input_date = document.querySelector('input[name=date]')
let input_time = document.querySelector('input[name=time]')
let input_category = document.getElementById('category')
let input_genre = document.getElementById('genre')
let input_address = document.querySelector('input[name=address]')
let input_price = document.querySelector('input[name=price]')
let input_info = document.querySelector('input[name=info]')
let input_org_link = document.querySelector('input[name=org_link]')
let input_photo = document.querySelector('input[name=photo]')
let input_phone = document.querySelector('input[name=phone]')
let input_org_email = document.querySelector('input[name=org_email]')

let addButton = document.querySelector('button[name=button_add]')

window.addEventListener('keydown', e => {
    if (e.keyCode == 13) addButton.click()
})

  addButton.addEventListener('click', () => {
      let data = {'title':input_title.value,
      'date':input_date.value,
      'time':input_time.value,
      'category':input_category.options[input_category.selectedIndex].value,
      'genre':input_genre.options[input_genre.selectedIndex].value,
      'address':input_address.value,
      'price':input_price.value,
      'info':input_info.value,
      'org_link':input_org_link.value,
      'photo':input_photo.value,
      'phone':input_phone.value,
      'org_email':input_org_email.value,
      'flag':0}
      localStorage.setItem(`${++localStorage.length}`, JSON.stringify(data))
      window.location.href = 'main.html'
  })
