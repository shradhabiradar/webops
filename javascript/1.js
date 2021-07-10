var text = document.getElementById("text");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTime(){
    if(stoptime == true){
        stoptime = false;
        starttimer();
    }
}

function starttimer(){
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
    
        sec = sec + 1;
    
        if (sec == 60) {
          min = min + 1;
          sec = 0;
        }
        if (min == 60) {
          hr = hr + 1;
          min = 0;
          sec = 0;
        }
    
        if (sec < 10 || sec == 0) {
          sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
          min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
          hr = '0' + hr;
        }
    
        text.innerHTML = hr + ':' + min + ':' + sec;
    
        setTimeout("starttimer()", 1000);
      }
}


 function reset(){
    text.innerHTML = "00:00:00"
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
 }

 function stopTime(){
     if (stoptime == false) {
        stoptime = true;
      }
 }

var startButton = document.getElementById('start')
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime)
resetButton.addEventListener("click", reset)