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
const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const scissors = document.querySelector(".btn-scissors");
const main = document.querySelector("main");
const rockChoice = document.querySelector(".rock-section");
const paperChoice = document.querySelector(".paper-section");
const scissorsChoice = document.querySelector(".scissors-section");
const userChoice = document.querySelectorAll(
  ".scissors-section, .rock-section, .paper-section"
);
const sysChoice = document.querySelectorAll(
  ".rock-sec-sys, .paper-sec-sys, .scissors-sec-sys"
);
const score = document.querySelector('.score-input');
const playAgain = document.querySelector(".play-again");
const result = document.querySelector("#result");
const resumeGame = document.querySelector(".playagain-btn");

//user score
let userScore = 0;

const updateScore = () =>{
  score.value = userScore;
}

//determine winner

const getUserChoice = () => {
  for (let container of userChoice) {
    if (container.style.display === "flex") {
      if (container.classList.contains("rock-section")) return "rock";
      if (container.classList.contains("paper-section")) return "paper";
      if (container.classList.contains("scissors-section")) return "scissors";
    }
  }
  console.error("No user choice found!");
  return null;
};

const getSysChoice = () => {
  for (let container of sysChoice) {
    if (container.style.display === "flex") {
      if (container.classList.contains("rock-sec-sys")) return "rock";
      if (container.classList.contains("paper-sec-sys")) return "paper";
      if (container.classList.contains("scissors-sec-sys")) return "scissors";
    }
  }
  console.error("No system choice found!");
  return null;
};


const whoWins = () => {
  const userPicks = getUserChoice();
  const sysPicks = getSysChoice();

  if (userPicks === sysPicks) {
    result.textContent = "It's a tie";
    resumeGame.style.color = "rgb(0, 0, 0)";
  } else if (
    (userPicks === "rock" && sysPicks === "scissors") ||
    (userPicks === "paper" && sysPicks === "rock") ||
    (userPicks === "scissors" && sysPicks === "paper")
  ) {
    result.textContent = "You win";
    resumeGame.style.color = "rgb(71, 71, 178)";
    userScore++;
    
  } else {
    result.textContent = "You lose";
    resumeGame.style.color = "rgb(191, 27, 27)";
  }

  updateScore();
};

//choices

const handleChoices = (sectionDisplayed) => {
  //user choice
  main.style.display = "none";
  sectionDisplayed.style.display = "flex";

  //system choice
  const randomIndex = Math.floor(Math.random() * sysChoice.length);
  const containerPicked = sysChoice[randomIndex];
  //manage display
  sysChoice.forEach((choice) => {
    choice.style.display = "none";
  });
  containerPicked.style.display = "flex";

  //compare choices
  whoWins();

  //resume game
  playAgain.style.display = "flex";
};

//events on choices buttons

rock.addEventListener("click", () => handleChoices(rockChoice));
paper.addEventListener("click", () => handleChoices(paperChoice));
scissors.addEventListener("click", () => handleChoices(scissorsChoice));

//resume game

resumeGame.addEventListener("click", () => {
  //hide game, show main screen
  const sectionUser = document.querySelectorAll(
    ".scissors-section, .rock-section, .paper-section"
  );
  sectionUser.forEach((user) => {
    user.style.display = "none";
  });
  const sectionSys = document.querySelectorAll(
    ".scissors-sec-sys, .rock-sec-sys, .paper-sec-sys"
  );
  sectionSys.forEach((system) => {
    system.style.display = "none";
  });

  playAgain.style.display = "none";
  main.style.display = "flex";

  // reset choices
  rockChoice.style.display = "none";
  paperChoice.style.display = "none";
  scissorsChoice.style.display = "none";
});
