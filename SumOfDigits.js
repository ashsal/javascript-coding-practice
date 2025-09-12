function calculateSumOfDigits(inputNumber) {
  // validate for positive integers
  const inputNumberAsString = inputNumber.toString();
  console.log(inputNumberAsString);
  console.log(typeof inputNumberAsString);

  const splittedString = inputNumberAsString.split("");
  console.log(splittedString);

  let sumOfDigits = 0;
  splittedString.forEach((num) => {
    console.log(num);
    sumOfDigits = sumOfDigits + parseInt(num);
  });

  return sumOfDigits;
}

function calculateSumOfDigits2(inputNumber) {
  // validations
  let number = inputNumber;
  let result = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);

    console.log(number, lastDigit);
    result = result + lastDigit;
  }

  return result;
}

console.log("23", calculateSumOfDigits(23));
console.log("456", calculateSumOfDigits(456));
console.log("12", calculateSumOfDigits(12));

console.log("calculateSumOfDigits2");
console.log("23", calculateSumOfDigits2(23));
console.log("456", calculateSumOfDigits2(456));
console.log("12", calculateSumOfDigits2(12));
