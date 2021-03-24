const toggleEl = document.querySelector('.toggle')
const hourNeedle = document.querySelector('.hour')
const minuteNeedle = document.querySelector('.minute')
const secondNeedle = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')


const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    if( html.classList.contains('dark') ){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
});

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const hourForClock = hour % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    console.log(day, date, hourForClock)

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`
    timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute}`
    dateEl.innerHTML = `${weekdays[day]}, ${months[month]}<span class="circle">${date}</span>`

    
}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setInterval(setTime, 1000);