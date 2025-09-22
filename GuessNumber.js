const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

//console.log(randomNumber);
const prompt = require("prompt-sync")();
let userInput = prompt(
  `Please guess the number, it is between 1 and ${maxNumber} `
);
userInput = parseInt(userInput);
// validate that userInput is between 1 and 100

while (userInput != randomNumber) {
  if (userInput > randomNumber) {
    if (userInput - randomNumber > 5) {
      console.log("Too high, choose a lower number");
    } else {
      console.log("Your number is high but you are close");
    }
  } else {
    if (randomNumber - userInput > 5) {
      console.log("Too low, choose a higher number");
    } else {
      console.log("Your number is low but you are close");
    }
  }
  userInput = prompt(
    `Please guess the number, it is between 1 and ${maxNumber} `
  );
  userInput = parseInt(userInput);
}

console.log("Congratulations!! you have found the correct number ", userInput);
