// Variables

var tenspart = 0;
var minpart = 0;
var secpart = 0;
var time;

// Node Selector

var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");
var tenth = document.querySelector(".tens");
var minute = document.querySelector(".min");
var second = document.querySelector(".sec");

// Add Event Listener

start.addEventListener("click", ()=>{
    clearInterval(time);
    time = setInterval(watchCounter, 10);
});

stop.addEventListener("click", ()=>{
    clearInterval(time);
});

reset.addEventListener("click", ()=>{
    clearInterval(time);
    tenspart = 0;
    minpart = 0;
    secpart = 0;
    tenth.innerHTML = "0" + tenspart;
    second.innerHTML = "0" + secpart;
    minute.innerHTML = "0" + minpart;
});

// Event Function

var watchCounter = function () {
    tenspart++;
    tenth.innerHTML = tenspart;
    if (tenspart < 9) {
        tenth.innerHTML = "0" + tenspart;
    }

    if (tenspart > 99) {
        secpart++;
        second.innerHTML = secpart;
        if (secpart < 9) {
            second.innerHTML = "0" + secpart;
        }
        tenspart = 0;
    }
    
    if (secpart > 59) {
        minpart++;
        minute.innerHTML = minpart;
        if (minpart < 9) {
            minute.innerHTML = "0" + minpart;   
        }
        secpart = 0;
    }
};
