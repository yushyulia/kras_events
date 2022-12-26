// let input_title = document.querySelector('input[name=title]')
// let input_date = document.querySelector('input[name=date]')
// let input_time = document.querySelector('input[name=time]')
// let input_category = document.getElementById('category')
// let input_genre = document.getElementById('genre')
// let input_address = document.querySelector('input[name=address]')
// let input_price = document.querySelector('input[name=price]')
// let input_info = document.querySelector('input[name=info]')
// let input_org_link = document.querySelector('input[name=org_link]')
// let input_photo = document.querySelector('input[name=photo]')
// let input_phone = document.querySelector('input[name=phone]')
// let input_org_email = document.querySelector('input[name=org_email]')

function validationEventForm(title, date, time, category, genre, address, price, info, org_link, photo, phone, org_email){
  if(title && date && time && category && genre && address && price && info &&
     org_link.checkValidity() && photo.checkValidity() && phone.checkValidity() &&
     org_email.checkValidity()){
       console.log("!!");
       return true;
     }
}
