/* 
 * Write a JavaScript program to display the current day and time in the following format.
 * Sample Output : Today is : Tuesday. 
 * Current time is : 10 PM : 30 : 38
 */

let data = new Date();
let today = data.getDay();
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];

// show current weekday
let currentDate = document.getElementById('date').innerText = `Today is ${weekDays[today]}`;

// current time
let hour = data.getHours();
let mins = data.getMinutes();
let secs = data.getSeconds();
let timestamp = (hour >= 12) ? 'PM' : 'AM';

// converting from 24h to 12h format
hour = (hour >= 12) ? hour - 12 : hour;

// noon or midnight timestamp
if (hour === 0 && timestamp === 'PM') {
    if (mins === 0 && secs === 0) {
        hour = 12;
        timestamp = 'noon';
    } else {
        hour = 12;
        timestamp = 'PM';
    }
}

if (hour === 0 && timestamp === 'AM') {
    if (mins === 0 && secs === 0) {
        hour = 12;
        timestamp = 'midnight';
    } else {
        hour = 12;
        timestamp = 'AM';
    }
}

// show current hour
let currentHour = document.getElementById('time').innerText = `⏰ ${hour} ${timestamp} : ${mins} : ${secs}`;
