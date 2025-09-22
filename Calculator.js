const prompt = require("prompt-sync")();
let exit = false;

while (!exit) {
  console.log(`Please choose one of the below options
    1. for Addition
    2. for Subtraction
    3. for Multiplication
    4. for Division
    5 for exit`);

  let userInput = prompt("");
  userInput = parseInt(userInput);
  switch (userInput) {
    case 1:
      const userInputForAddition = acceptTwoNumbersFromTheUser();
      const additionResult =
        userInputForAddition.firstNumber + userInputForAddition.secondNumber;
      console.log(
        `${userInputForAddition.firstNumber} + ${userInputForAddition.secondNumber} = ${additionResult}`
      );

      break;
    case 2:
      const userInputForSubtraction = acceptTwoNumbersFromTheUser();
      const subtractionResult =
        userInputForSubtraction.firstNumber -
        userInputForSubtraction.secondNumber;
      console.log(
        `${userInputForSubtraction.firstNumber} - ${userInputForSubtraction.secondNumber} = ${subtractionResult}`
      );

      break;
    case 3:
      const userInputForMultiplication = acceptTwoNumbersFromTheUser();
      const multiplicationResult =
        userInputForMultiplication.firstNumber *
        userInputForMultiplication.secondNumber;
      console.log(
        `${userInputForMultiplication.firstNumber} * ${userInputForMultiplication.secondNumber} = ${multiplicationResult}`
      );
      break;
    case 4:
      const userInputForDivision = acceptTwoNumbersFromTheUser();
      const divisionResult =
        userInputForDivision.firstNumber / userInputForDivision.secondNumber;
      console.log(
        `${userInputForDivision.firstNumber} / ${userInputForDivision.secondNumber} = ${divisionResult}`
      );
    case 5:
      exit = true;
      break;
    default:
      console.log("Bad choice");
      break;
  }
}

console.log("Thanks for using the calculator");

function acceptTwoNumbersFromTheUser() {
  let firstNumber = prompt("Please enter the first number: ");
  firstNumber = parseInt(firstNumber);

  let secondNumber = prompt("Please enter the second number: ");
  secondNumber = parseInt(secondNumber);

  return { firstNumber, secondNumber };
}
