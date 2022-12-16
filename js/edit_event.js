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
let publButton = document.querySelector('button[name=button_publication]')
let key

window.addEventListener("load", function(){
  var score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
  key = score[0];
  let data = JSON.parse(localStorage.getItem(key))
  input_title.value = data.title;
  input_date.value = data.date;
  input_time.value = data.time;
  input_address.value = data.address;
  input_price.value = data.price;
  input_info.value = data.info;
  input_org_link.value = data.org_link;
  // input_photo.value = data.photo;
  input_phone.value = data.phone;
  input_org_email.value = data.org_email;
  input_category.value = data.category;
  input_genre.value = data.genre;
});

publButton.addEventListener('click', () => {
    let title = input_title.value
    let date = input_date.value
    let time = input_time.value
    let category = input_category.options[input_category.selectedIndex].value;
    let genre = input_genre.options[input_genre.selectedIndex].value;
    let address = input_address.value
    let price = input_price.value
    let info = input_info.value
    let org_link = input_org_link.value
    let photo = input_photo.value
    let phone = input_phone.value
    let org_email = input_org_email.value
    let data = {'title':title, 'date':date, 'time':time, 'category':category, 'genre':genre, 'address':address, 'price':price, 'info':info, 'org_link':org_link, 'photo':photo, 'phone':phone, 'org_email':org_email, 'flag':1}
    localStorage.setItem(`${++localStorage.length}`, JSON.stringify(data))
    localStorage.removeItem(key);
    window.location.href = 'event_list.html'
})
