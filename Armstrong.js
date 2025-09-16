function isArmstrong(inputNumber) {
  // validate that inputNumber is a positive integer
  let number = inputNumber;
  const digits = [];
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    digits.push(lastDigit);
  }

  const length = digits.length;

  let sum = 0;

  digits.forEach((d) => {
    sum = sum + Math.pow(d, length);
  });

  return inputNumber === sum;
}
console.log("153", isArmstrong(153));
console.log("370", isArmstrong(370));
console.log("243", isArmstrong(243));
console.log("371", isArmstrong(371));
console.log("92727", isArmstrong(92727));
