"use strict"

// console.log(document.getElementById("bt"))
// console.log(document.querySelector(".btn-again").textContent)
// console.log(document.querySelector("input").value)


////// initial values ::


let secretNumber = Math.trunc((Math.random()*20)+1) //// between 1 and 20 ...


let score = 20 ;

let highScore = 0 ;

document.querySelector(".logo").textContent = secretNumber


document.querySelector(".btn-check").addEventListener("click",function(){
    console.log("hello there......")
})