
const buttonPreviousMonth = document.getElementById('button__previous__month');
const buttonNextMonth = document.getElementById('button__next__month');
const calendarMonth = document.getElementById('header__m&y');
const calendarDaysButton = document.querySelector('.calendar__container__days__boxes');
const liElements = document.querySelectorAll('.calendar__container__days__boxes__texts');
const backDrop = document.getElementById('backdrop');
const eventInput = document.getElementById('eventInput');
const eventEdit = document.getElementById('eventEdit');
const eventData = document.getElementById('eventData');
const buttonCancel = document.getElementById('buttonCancel');
const buttonSave = document.getElementById('buttonSave');
const buttonDelete = document.getElementById('buttonDelete');
const buttonEdit = document.getElementById('buttonEdit');

let eventos = new Map();


const todayDate = new Date();
let todayMonth = todayDate.getMonth() 
let todayYear = todayDate.getFullYear();
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

calendarMonth.textContent = months[todayMonth] + ", " + todayYear;
setCalendar(todayMonth, todayYear);
addNotificationIcon();



buttonPreviousMonth.addEventListener('click', function() {
    if(todayMonth == 0) {
        todayMonth = 11;
        todayYear--;
    } else { 
        todayMonth--;
    }
    calendarMonth.textContent = months[todayMonth] + ", " + todayYear;
    setCalendar(todayMonth, todayYear)
    addNotificationIcon();
    addExistingEvents(todayMonth, todayYear);
});

buttonNextMonth.addEventListener('click', function() {
    if(todayMonth == 11) {
        todayMonth = 0;
        todayYear++;
    } else {
        todayMonth++;
    }
    calendarMonth.textContent = months[todayMonth] + ", " + todayYear;
    setCalendar(todayMonth, todayYear)
    addNotificationIcon();
    addExistingEvents(todayMonth, todayYear);
});

calendarDaysButton.addEventListener('click', function() {

    var resultado = event.target.getAttribute('data-boxnumber');
    let notification = document.getElementById('notification__' + resultado);
    key = todayYear + '.'+ todayMonth + '.' + resultado;


    if (eventos.get(key)==undefined) {
        backDrop.style.display = 'block';
        eventInput.style.display = 'block';
    } else {
        backDrop.style.display = 'block';
        eventEdit.style.display = 'block';
        }
    
    buttonCancel.addEventListener('click', function() {
        backDrop.style.display = 'none';
        eventInput.style.display = 'none';
    }); 


    buttonSave.addEventListener('click', function() {
        console.log("inicio save " + resultado);
        let notification = document.getElementById('notification__' + resultado);
        createEvent(notification);
        backDrop.style.display = 'none';
        eventInput.style.display = 'none';
        

        // resultado = null;
    });

    buttonEdit.addEventListener('click', function() {
        eventEdit.style.display = 'none';
        eventInput.style.display = 'block';
    });

    buttonDelete.addEventListener('click', function() {
        console.log("Delete = " + resultado);
        notification = document.getElementById('notification__' + resultado);
        notification.classList.add('empty');
        eventos.delete(key);
        backDrop.style.display = 'none';
        eventEdit.style.display = 'none';
    });

    
});




function setCalendar(month, year) {
    resetCalendarBoxes();
    const todayDate = new Date(year, month, 1);
    const todayWeekDay = todayDate.getDay();
    const numberOfDays = getNumberOfDays(month);
  
        for(i=0; i < 42; i++) {
            var dayContainer = document.getElementById("day__container__" + (i + 1));
            if(i < todayWeekDay) {
                dayContainer.classList.add("empty");
            } else if(i < numberOfDays + todayWeekDay) {
                var j = i - todayWeekDay + 1
                dayContainer.textContent = j;
                } else {
                    dayContainer.classList.add("empty");
                }
            }

}

function getNumberOfDays (month) {
    const daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (0 < month < 11) {
        return daysPerMonth[month];
    } else {
        return 0;
    }
}

function addNotificationIcon() {
    j = 0;
    liElements.forEach((li) => {
        const newImg = document.createElement('img');
        newImg.src = './Images/notification.png';

        if(li.querySelector('img.calendar__container__days__boxes__notification')) {
            newImg.id = "notification__" + j;
        } else {
            newImg.classList.add("calendar__container__days__boxes__notification");
            newImg.id = 'notification__' + j;
            newImg.classList.add("empty");
            
            li.appendChild(newImg);
        }
        j++
    });   
}

function addExistingEvents(month, year) {
    for (let i = 1; i <= 42; i++) {
        notification = document.getElementById('notification__' + i);
        key = year + '.' + month + '.' + i;
        if(eventos.get(key)!=undefined) {
            notification.classList.remove('empty');
        }
    }

}

function createEvent(notification) {
    eventTitle = document.getElementById('eventDescriptionInput').value;
    eventTime = document.getElementById('eventTimeInput').value;
    eventDuration = document.getElementById('eventDurationInput').value;
    value = eventTitle + '\nInício: ' + eventTime + '\nDuração: ' + eventDuration + 'h';
    eventos.set(key, value);
    notification.classList.remove('empty');
    eventData.innerText = eventos.get(key);
}