const daysOfTheWeek = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-feira", "Sexta-Feira", "Sábado"];
const todayDate = new Date();
const todayMonth = todayDate.getMonth();
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


const calendarWeek = document.getElementById('header__week');
calendarWeek.textContent = months[todayMonth];

createWeekCalendar();

function createWeekCalendar() {
    const weekDays = document.getElementById('week__calendar__weekdays');
    const calendarDays = document.getElementById('week__calendar__days');
    for (let i =1; i<=7; i++) { //geração do header com dias da semana
        const newWeekDay = document.createElement('li');
        
        newWeekDay.classList.add('calendar__container__weekdays__day');
        newWeekDay.textContent = daysOfTheWeek[i-1];
        
        weekDays.appendChild(newWeekDay);
    } 
    for (let i = 1; i <= 7; i++) { // geração dos containers numerados
        
        const newDay = document.createElement('li');
        
        
        newDay.classList.add('calendar__container__days__boxes__texts');
        newDay.id = "day__container__" + i;
        newDay.textContent = i;
        
        calendarDays.appendChild(newDay);
}
}