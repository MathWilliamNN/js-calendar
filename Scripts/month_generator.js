const weekDays = document.getElementById('calendar__weekdays');
const calendarDays = document.getElementById('calendar__days');
const daysOfTheWeek = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-feira", "Sexta-Feira", "Sábado"];


createCalendar();


function createCalendar() {

    for (let i =1; i<=7; i++) { //geração do header com dias da semana
        const newWeekDay = document.createElement('li');
        
        newWeekDay.classList.add('calendar__container__weekdays__day');
        newWeekDay.textContent = daysOfTheWeek[i-1];
        
        weekDays.appendChild(newWeekDay);
    } 

for (let i = 1; i <= 42; i++) {
    const newDay = document.createElement('li');

    newDay.classList.add('calendar__container__days__boxes__texts');
    newDay.id = "day__container__" + i;
    newDay.dataset.boxnumber = i-1;
    newDay.textContent = i;

    calendarDays.appendChild(newDay);
        
}
}   



function resetCalendarBoxes() {
    for (let i = 1; i <= 42; i++) {
        const calendarBox = document.getElementById("day__container__" + i)
        calendarBox.classList.remove("empty");
    }
}




