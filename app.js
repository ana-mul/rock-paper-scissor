//open rules
const btnRules = document.querySelector(".btn-rules");
const btnClose = document.querySelector(".close-btn");
const rules = document.querySelector(".rules-hide");
const body = document.body;

btnRules.addEventListener("click", () => {
  rules.style.display = "block";
  body.style.background = "hsl(237, 49%, 12%)";
});
btnClose.addEventListener("click", () => {
  rules.style.display = "none";
  body.style.background = "";
});

//game

//user choice
const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const scissors = document.querySelector(".btn-scissors");
const main = document.querySelector("main");
const rockChoice = document.querySelector(".rock-section");
const paperChoice = document.querySelector(".paper-section");
const scissorsChoice = document.querySelector(".scissors-section");

rock.addEventListener("click", () => {
  main.style.display = "none";
  rockChoice.style.display = "flex";
});
paper.addEventListener("click", () => {
  main.style.display = "none";
  paperChoice.style.display = "flex";
});
scissors.addEventListener("click", () => {
  main.style.display = "none";
  scissorsChoice.style.display = "flex";
});

//system choice
const sysChoice = document.querySelectorAll(".rock-sec-sys, .paper-sec-sys, .scissors-sec-sys");
const btnChoice = document.querySelectorAll(".btn-choice");
const playAgain = document.querySelector('.play-again');

btnChoice.forEach((btn) => {
  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * sysChoice.length);
    const containerPicked = sysChoice[randomIndex];

    sysChoice.forEach((choice) => {
      choice.style.display = "none";
    });
    containerPicked.style.display = "flex";
    playAgain.style.display = "flex";

    return containerPicked;
  });
});
