const prompt = require("prompt-sync")();

function acceptUserInput(promptMessage, invalidMessage) {
  let result = null;

  while (result === null) {
    let userInput = prompt(promptMessage);
    const userInputAsInt = parseInt(userInput);
    if (!Number.isInteger(userInputAsInt) || userInputAsInt < 1) {
      console.log(invalidMessage);
    } else {
      result = userInputAsInt;
    }
  }

  return result;
}

function roll1Dice(sidesInDevice) {
  const result = Math.floor(Math.random() * sidesInDevice) + 1;
  return result;
}

function rollMultipleDices(numberOfDices, sidesPerDice) {
  const result = [];
  for (let i = 0; i < numberOfDices; i++) {
    const resultOf1Dice = roll1Dice(sidesPerDice);
    result.push(resultOf1Dice);
  }

  return result;
}

let numberOfDicesResult = acceptUserInput(
  "Please enter the number of dices ",
  "Number of dices should be a positive integer"
);

let numberOfSidesResult = acceptUserInput(
  "Please enter the number of sides per dice ",
  "Number of side per dice should be a positive integer"
);

const result = rollMultipleDices(numberOfDicesResult, numberOfSidesResult);
console.log(result);
