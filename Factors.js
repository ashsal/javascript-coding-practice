function calculateFactor(inputNumber) {
  // validate inputNumber is a positive integer
  let result = [];
  for (let i = 1; i <= inputNumber / 2; i++) {
    if (inputNumber % i === 0) {
      result.push(i);
    }
  }

  result.push(inputNumber);

  return result;
}

console.log("4", calculateFactor(4));
console.log("14", calculateFactor(14));
console.log("35", calculateFactor(35));
