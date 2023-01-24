let period = document.getElementById("period")
let perNum = 1

function startTimer(duration, display) {
    
    
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            period.textContent = perNum += 1

        }else if(period.textContent >= 2){
            console.log("winner!")
           
        }
              

    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 30 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


