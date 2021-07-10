// fetch the element
var text = document.getElementById("text");

// initialize hr, min, s with 0
var hr = 0;
var min = 0;
var sec = 0;

// initilly the time is stopped and set to 0
var stoptime = true;

//function to start the timer
function startTime(){
    //check if the time is stoped or not
    if(stoptime == true){
        //to strt the times we need to make the stoped time false.
        stoptime = false;
        //calling other fuction when the stoped time is false
        starttimer();
    }
}

function starttimer(){
    //check if the timer is stoped or not
    if (stoptime == false) {
        //returns a interger
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        //increasing secons by 1
        sec = sec + 1;
        
        //if the seonds reach 60, min got icreased by 1 and so on
        if (sec == 60) {
          min = min + 1;
          sec = 0;
        }
        if (min == 60) {
          hr = hr + 1;
          min = 0;
          sec = 0;
        }
        //this is to make sure that the all seconds, mins, hours are in double digits
        if (sec < 10 || sec == 0) {
          sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
          min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
          hr = '0' + hr;
        }
        //fetching the text element and showing it on the screen
        text.innerHTML = hr + ':' + min + ':' + sec;
        
        //this fuction runs after every i sec.
        setTimeout("starttimer()", 1000);
      }
}

//fuction to reset the timer to 00:00:00
 function reset(){
    text.innerHTML = "00:00:00"
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
 }
//function to stop the timer
 function stopTime(){
     if (stoptime == false) {
        stoptime = true;
      }
 }

//fecthing the elements.
var startButton = document.getElementById('start')
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime)
resetButton.addEventListener("click", reset)
