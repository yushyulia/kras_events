let event_content = document.querySelector('.event-content')
let event_text = document.querySelector('.event-text')


window.addEventListener("load", function(){
  var score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
  let key = score[0];
  let data = JSON.parse(localStorage.getItem(key));
  let template = `<div class="event-content__photo">
                    <img src="${data.photo}">
                  </div>
                  <div class="event-content__info">
                    <h4>${data.title}</h4>
                    <p>${data.date} ${data.time}</p>
                    <p>${data.address}</p>
                    <p>${data.price}</p>
                    <button class="button" type="button" name="button" onclick="window.location.href = '${data.org_link}'">Купить билет</button>
                  </div>`
  let template2 = `<div class="event-text__item">
                      <p>${data.info}</p>
                    </div>`
  let date = new Date(data.date)
  Calendar("calendar", date.getFullYear(), date.getMonth());
  event_content.insertAdjacentHTML('afterbegin', template)
  event_text.insertAdjacentHTML('afterbegin', template2)
})
