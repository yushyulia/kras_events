let events = document.getElementById('event_body')

if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let value = JSON.parse(localStorage.getItem(key))
        let template = `<tr data-id="${++localStorage.length}" onclick="openEdit(${key})">
                          <td class="title">${value.title}</td>
                          <td class="info_date_place">${value.date} ${value.time}<br>${value.address} <br>${value.price}</td>
                          <td class="info_text_event">${value.info}</td>
                        </tr>`
        if (value.flag == 1){
          events.insertAdjacentHTML('afterbegin', template)
        }
    }
}

function openEdit(key) {
  window.open('request_form_admin.html?&'+key)
}
