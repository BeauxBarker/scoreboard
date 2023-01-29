
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

/*********** BREAKS **************/

const breaks = document.getElementById("break--b--h"),
      breaksBtn = document.getElementById("b-btn-h"),   
      leftArrow = document.getElementById("arrow__left");


const breaksA = document.getElementById("break--b--a"), 
      breaksBtnA = document.getElementById("b-btn-a"),
      rightArrow = document.getElementById("arrow__right");

breaksBtn.addEventListener("click", function(){
    breaks.textContent += "B"
    leftArrow.textContent = "◀︎"
})
breaksBtnA.addEventListener("click", function(){
    breaksA.textContent += "B"
    rightArrow.textContent = "▶︎"
})


/*********** FOULS ***************/

let foulH = document.getElementById("foul-num-h"),
    foulHbtn = document.getElementById("foul-btn"),
    foulA = document.getElementById("foul-num-a"),
    foulAbtn = document.getElementById("foul-btn-a"),
    foulTotal = document.getElementById("foul-total"),
    playerNum = document.getElementById("player-num");

let foulHScore = 0
let foulAScore = 0
let playerTotalFoul = 0




foulHbtn.addEventListener("click", function(){
    foulH.textContent = foulHScore += 1
    foulTotal.textContent = playerTotalFoul = 1
    playerNum.textContent = Math.floor(Math.random() * 100)
})


foulAbtn.addEventListener("click", function(){
    foulA.textContent = foulAScore += 1
    foulTotal.textContent = playerTotalFoul = 1
    playerNum.textContent = Math.floor(Math.random() * 100)
})



/*********** TIMER ***************/

let   savedScore = document.getElementById("home--last--score"),
      savedScoreVisit = document.getElementById("visit--last--score"),
      period = document.getElementById("period"),
      homeWin = document.getElementById("home-win"),
      visitWin = document.getElementById("visit-win"),
      pauseTimer = document.getElementById("pause");
      

let perNum = 1 // which period we are in
let sumH = 0 // total score for home
let sumA = 0 // total score for visitors



function startTimer(duration, display) {

    let timer = duration, minutes, seconds;
    let endTimer = 0;
    setInterval(function () {
       

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        if(timer === 30){
            endTimer += 1;
        }
        if (endTimer === 4){
            const gg1 = document.getElementById("gameover1");
            const gg2 = document.getElementById("gameover2");
            const gg3 = document.getElementById("gameover3");
        
        if(sumH === sumA){
                gg1.style.display = "block";
            }else if(sumH > sumA){
                gg2.style.display = "block";
                }else{gg3.style.display = "block";}
        }        
            
        else if (endTimer > 4){
            startConfetti()
            
    
            timer = " ";
            perNum = 1;
            foulHScore = 0;
            foulAScore = 0;
            period.textContent = 1
            foulH.textContent = 0
            foulA.textContent = 0
            foulTotal.textContent = " "
            playerNum.textContent = " "

         

        }
     

        else if (--timer < 0) {
            
            timer = duration;
       

            period.textContent = perNum += 1;
            home.textContent = timer - 30;

     
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
    var oneMinute = 30 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};





