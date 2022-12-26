function Calendar(id, year, month) {
  var DaysInMonth = new Date(year,month+1,0).getDate(),
      LastDay = new Date(year,month,DaysInMonth),
      LastDayWeekInMonth = new Date(LastDay.getFullYear(),LastDay.getMonth(),DaysInMonth).getDay(),
      FirstDayWeekInMonth = new Date(LastDay.getFullYear(),LastDay.getMonth(),1).getDay(),
      calendar = '<tr>',
      month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  if (FirstDayWeekInMonth != 0) {
      for(var  i = 1; i < FirstDayWeekInMonth; i++) calendar += '<td>';
  }
  else {
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= DaysInMonth; i++) {
    if (i == new Date().getDate() && LastDay.getFullYear() == new Date().getFullYear() && LastDay.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }
    else{
      calendar += '<td>' + i;
    }
    if (new Date(LastDay.getFullYear(),LastDay.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for(var  i = LastDayWeekInMonth; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[LastDay.getMonth()] +' '+ LastDay.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = LastDay.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = LastDay.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
}

document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(
    document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
}

document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(
    document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
}
