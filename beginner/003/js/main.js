/* 
 * Write a JavaScript program to get the current date. 
 * Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */


const date = new Date();

let day         = date.getDate();
let month       = date.getMonth()+1;
let fullYear    = date.getFullYear();

// days and months format
day = (day < 10) ? `0${day}` : day;
month = (month < 10) ? `0${month}` : month;

// show the date
document.querySelector('#date').innerText = `${day}/${month}/${fullYear}, ${day}-${month}-${fullYear}`;