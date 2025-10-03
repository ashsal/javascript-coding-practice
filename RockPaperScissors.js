const prompt = require("prompt-sync")();

const rock = 1;
const paper = 2;
const scissors = 3;

let userScore = 0;
let computerScore = 0;
let exit = false;

const names = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

function createRandomNumber(maxNumber) {
  // validate that maxNumber is a positive integer
  //console.log(Math.random()); // 0 - 1
  const result = Math.floor(Math.random() * maxNumber) + 1; // 0 - less than the maxNumber
  return result;
}

while (!exit) {
  console.log(`Please select one of the below options
    1. Press 1 for ROCK
    2. Press 2 for PAPER
    3. Press 3 for SCISSORS
    4. Press 4 for exit`);

  let userChoice = prompt("");

  //console.log(userChoice);

  // validate the user can only choose between 1,2,3,4
  userChoice = parseInt(userChoice);

  const computerChoice = createRandomNumber(3);

  //console.log(userChoice, computerChoice);

  if (userChoice === 4) {
    exit = true;
  } else if (userChoice === computerChoice) {
    console.log("Its a tie!!");
  } else if (
    (userChoice === rock && computerChoice === scissors) ||
    (userChoice === rock && computerChoice === paper) ||
    (userChoice === scissors && computerChoice === paper)
  ) {
    console.log(
      `You win!! You chose ${names[userChoice]} and computer chose ${names[computerChoice]}`
    );
    userScore++;
  } else {
    console.log(
      `Computer wins!! You chose ${names[userChoice]} and computer chose ${names[computerChoice]}`
    );
    computerScore++;
  }
}

console.log("Thanks for playing the game.");

if (userScore === computerScore) {
  console.log(
    `Its a tie!! Your score is ${userScore} and computer score is ${computerScore}`
  );
}
if (userScore > computerScore) {
  console.log(
    `You won!! Your score is ${userScore} and computer score is ${computerScore}`
  );
} else if (computerScore > userScore) {
  console.log(
    `Computer won!! Your score is ${userScore} and computer score is ${computerScore}`
  );
}
console.log("");
