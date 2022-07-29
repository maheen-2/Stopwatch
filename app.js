//🔔 ALWAYS SAVE A VARIABLE IN A var INSTEAD OF const WHENEVER U HEV TO RE-ASSIGN IT VALUES MULTIPLE TIMES!!🔔

// Setting these const 0 will mek sure that their initial value is 0 logically:
var count = 0;
var sec = 0;
var min = 0;
var hr = 0;

// false means timer stop $ true means timer on:
// Must be var instead of const. Can't assign multiple values to const:
var timer = false;
// Here u'll run the functions & give them logic that u created in "index.html" in onclick attribute:
function start(){
     timer = true;
     stopwatch();
}

function stop(){
timer = false;
}

function reset(){
timer = false;

count = 0;
sec = 0;
min = 0;
hr = 0;
// Makes the above logic visible on the website:
document.getElementById("count").innerHTML = "00";
document.getElementById("sec").innerHTML = "00";
document.getElementById("min").innerHTML = "00";
document.getElementById("hr").innerHTML = "00";
}

// The main logic of this stopwatch lies here:
function stopwatch(){
if(timer == true){
count = count+1;
if(count == 100){
    sec = sec + 1;
    count = 0;
}
if(sec == 60){
    min = min + 1;
    sec = 0;
}
if(min == 60){
    hr = hr + 1;
    min = 0;
    sec = 0;
}
var countString = count;
var secString = sec;
var minString = min;
var hrString = hr;
if(count < 10){
    countString = "0" + countString;
}
if(sec < 10){
    secString = "0" + secString;
}
if(min < 10){
    minString = "0" + minString;
}
if(hr < 10){
    hrString = "0" + hrString;
}
// Makes the above logic visible on the website:
document.getElementById("count").innerHTML = countString;
document.getElementById("sec").innerHTML = secString;
document.getElementById("min").innerHTML = minString;
document.getElementById("hr").innerHTML = hrString;
// Sets a timer which executes a function or specified piece of code once the timer (in ms) expires:
setTimeout("stopwatch()", 10); 
}
}