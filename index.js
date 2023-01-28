
let home = document.getElementById("tiger--score")
let visit = document.getElementById("visitor--score")
let scoreH = 0
let scoreA = 0
let homeValue = [ ]
let visitValue = [ ]


//******* HOME Buttons **********//

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




/********** VISIT BUTTONS **********/

function add1A(){
    visit.textContent = scoreA += 1
    visitValue.push(scoreA)
    
}
function add2A(){
    visit.textContent = scoreA += 2
    visitValue.push(scoreA)
    
}
function add3A(){
    visit.textContent = scoreA += 3
    visitValue.push(scoreA)
    
}




/*********** FOULS ***************/

const foulH = document.getElementById("foul-num-h")
const foulHbtn = document.getElementById("foul-btn")
const foulA = document.getElementById("foul-num-a")
const foulAbtn = document.getElementById("foul-btn-a")
const foulTotal = document.getElementById("foul-total")
const playerNum = document.getElementById("player-num")

let foulHScore = 0
let foulAScore = 0
let playerTotalFoul = 0




foulHbtn.addEventListener("click", function(){
    foulH.textContent = foulHScore += 1
    foulTotal.textContent = playerTotalFoul = 1
    console.log(foulHScore)
    playerNum.textContent = Math.floor(Math.random() * 100)
})


foulAbtn.addEventListener("click", function(){
    foulA.textContent = foulAScore += 1
})



/*********** TIMER ***************/

const savedScore = document.getElementById("home--last--score")
const savedScoreVisit = document.getElementById("visit--last--score")
const period = document.getElementById("period")
const homeWin = document.getElementById("home-win")
const visitWin = document.getElementById("visit-win")

let perNum = 1
let sumH = 0
let sumA = 0




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
                    sumH += homeValue[i]
                    savedScore.textContent = sumH
                    homeValue[i] = 0
                    
             
                }
            } 
            for (const [i, value] of visitValue.entries()) {
                if (i === visitValue.length - 1) {
                    

                    sumA += visitValue[i]
                    savedScoreVisit.textContent = sumA
                    visitValue[i] = 0
                    visit.textContent = 0
                    
                }
            } 
            
            
            scoreA = 0
            scoreH = 0


        }



       
        if(perNum === 1){
            homeWin.textContent = " ";
            visitWin.textContent = " ";
        }
        else if(sumH === sumA){
            homeWin.textContent = "TIE";
            visitWin.textContent = "TIE";
        }else if(sumH < sumA){
            visitWin.textContent = "WINNING!";
            homeWin.textContent = " ";
        }else{
            homeWin.textContent = "WINNING";
            visitWin.textContent = " ";
        }
        
        
  
        
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 15 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

