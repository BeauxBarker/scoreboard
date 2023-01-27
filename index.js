let btn = document.getElementById("btn")
let home = document.getElementById("tiger--score")
let visit = document.getElementById("visitor--score")
let scoreH = 0
let scoreA = 0
let homeValue = [ ]




function add1H(){
    home.textContent = scoreH += 1
    homeValue.push(scoreH)
    
}

function add2H(){
    home.textContent = scoreH += 2
    homeValue.push(scoreH)
    
}

function add3H(){
    home.textContent = scoreH += 3
    homeValue.push(scoreH)
    
}



function add1A(){
    visit.textContent = scoreA += 1
    
}
function add2A(){
    visit.textContent = scoreA += 2
}
function add3A(){
    visit.textContent = scoreA += 3
}



let savedScore = document.getElementById("home--last--score")
let period = document.getElementById("period")
let perNum = 1
let sum = 0



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
            period.textContent = perNum += 1;
            home.textContent = timer - 15;
     
            for (const [i, value] of homeValue.entries()) {
                if (i === homeValue.length - 1) {
                    

                    sum += homeValue[i]
                    savedScore.textContent = sum
                    homeValue[i] = 0
                    
                 
                }
            } 
           
            console.log(sum)
            
        
            scoreH = 0
            
        }
       
        
        
        
        
        else if(period.textContent === 4){
            console.log("winner!")
           
        }
            
  
        
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 15 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

