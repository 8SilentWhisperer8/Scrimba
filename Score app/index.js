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

//Declare the incremments constant for away team
const increaseAwayOne = 1
document.getElementById("increase-away-1").textContent = increaseAwayOne
const increaseAwayTwo = 2
document.getElementById("increase-away-2").textContent = increaseAwayTwo
const increaseAwayThree = 3
document.getElementById("increase-away-3").textContent = increaseAwayThree

function addHomeOne (){
    // document.getElementById("increase-home-1") = score + 1
    document.getElementById("score-1").textContent = 10
}