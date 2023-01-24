let btn = document.getElementById("btn")
let home = document.getElementById("tiger--score")
let visit = document.getElementById("visitor--score")

let scoreH = 0
let scoreA = 0

    

function add1H(){
    home.textContent = scoreH += 1
}

function add2H(){
    home.textContent = scoreH += 2
}

function add3H(){
    home.textContent = scoreH += 3
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
