let searched_events = document.querySelector('.search-events')
let not_events = document.querySelector('.not_events')

function search(){
  var score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
  let str = score[0];
  let counter = 0;
  for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i)
    let value = JSON.parse(localStorage.getItem(key))
    if((value.title.toLowerCase().indexOf(str.toLowerCase()) != -1 || value.category == str || value.genre == str || value.date == str) && value.flag == 1){
      console.log(value.org_link);
      let template = `<div class="events__item" onclick="openEventPage(${key})">
                        <img src="${value.photo}" alt="">
                        <h3 class="event-title">${value.title}</h3>
                        <p class="event-date">${value.date} ${value.time}</p>
                        <p class="event-price">${value.price}</p>
                        <p>${value.address}</p>
                      </div>`
      counter++;
      searched_events.insertAdjacentHTML('afterbegin', template);
    }
  }
  if (counter == 0){
    let template = `<p>Ничего не найдено</p>`;
    not_events.insertAdjacentHTML('afterbegin', template);
  }
};

window.addEventListener("load", function(){
  search();
})

function openEventPage(key) {
  window.open('event.html?&'+key);
}
