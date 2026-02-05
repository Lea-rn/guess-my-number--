"use strict";

// console.log(document.getElementById("bt"))
// console.log(document.querySelector(".btn-again").textContent)
// console.log(document.querySelector("input").value)

////// initial values ::

let secretNumber = Math.trunc(Math.random() * 20 + 1); //// between 1 and 20 ...

let score = 20; ///21

let highScore = 0;

// document.querySelector(".logo").textContent = secretNumber;

////// display message functionality :::

const displayMessage = function (message) {
  document.querySelector(".start-title").textContent = message;
};

////// btn check functionality :::::::::::::::
document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector("input").value);

  if (!guess) {
    displayMessage("No Number ... 🛑");
  } else if (guess === secretNumber) {
    displayMessage("  Correct Number  !! ... 🎉 ");
    score++;
    document.querySelector(".score").textContent = score; //// u.u.i  (update user interface)
    document.querySelector("body").style.backgroundColor = "greenyellow";
    document.querySelector(".logo").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector("input").value = "";
  } else if (score > 0) {
    if (guess > secretNumber) {
      document.querySelector(".logo").textContent = "?";
      document.querySelector("body").style.backgroundColor = "rgb(48, 46, 46)";
      displayMessage(" too high !! ... 📈");
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("input").value = "";
    } else if (guess < secretNumber) {
      document.querySelector(".logo").textContent = "?";
      document.querySelector("body").style.backgroundColor = "rgb(48, 46, 46)";
      displayMessage(" too low !! ... 📉 ");
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("input").value = "";
    }
  } else {
    displayMessage("you loose the game 🔥");
  }
});



////// again functionality :

document.querySelector(".btn-again").addEventListener("click",function(){
  score = 20;
  //// u.u.i :
  document.querySelector(".score").textContent = score
  highScore = 0 ;
  /// u.u.i :
  document.querySelector(".highscore").textContent = highScore ;
  displayMessage("Start guessing ......")
document.querySelector("body").style.backgroundColor = "rgb(48, 46, 46)";
        document.querySelector(".logo").textContent = "?";
 document.querySelector("input").value = "" ;
})