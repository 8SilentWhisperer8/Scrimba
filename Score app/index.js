//Settings score to zero
let score1 = 0
document.getElementById("score-1").textContent = score1
let score2 = 0
document.getElementById("score-2").textContent = score2

//Declare the incremments constant for home team
const increaseHomeOne = 1
document.getElementById("increase-home-1").textContent = increaseHomeOne
const increaseHomeTwo = 2
document.getElementById("increase-home-2").textContent = increaseHomeTwo
const increaseHomeThree = 3
document.getElementById("increase-home-3").textContent = increaseHomeThree

//Create incremental funtions for each home value
function addHomeOne (){
    score1 = increaseHomeOne + score1
    document.getElementById("score-1").textContent = score1
}

function addHomeTwo (){
    score1 = increaseHomeTwo + score1
    document.getElementById("score-1").textContent = score1
}

function addHomeThree (){
    score1 = increaseHomeThree + score1
    document.getElementById("score-1").textContent = score1
}


//Declare the incremments constant for away team
const increaseAwayOne = 1
document.getElementById("increase-away-1").textContent = increaseAwayOne
const increaseAwayTwo = 2
document.getElementById("increase-away-2").textContent = increaseAwayTwo
const increaseAwayThree = 3
document.getElementById("increase-away-3").textContent = increaseAwayThree

//Create incremental funtions for away home value
function addAwayOne (){
    score2 = increaseAwayOne + score2
    document.getElementById("score-2").textContent = score2
}

function addAwayTwo (){
    score2 = increaseAwayTwo + score2
    document.getElementById("score-2").textContent = score2
}

function addAwayThree (){
    score2 = increaseAwayThree + score2
    document.getElementById("score-2").textContent = score2
}

//Reset score funtionality

function resetScore () {
    score1 = 0
    score2 = 0
    document.getElementById("score-1").textContent = "0";
    document.getElementById("score-2").textContent = "0";
}