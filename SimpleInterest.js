function calculateSimpleInterest(principalAmount, interestRate, duration) {
  // validate that principalAmount, interestRate, duration are numbers
  const multiplicationResult = principalAmount * interestRate * duration;
  const simpleInterest = multiplicationResult / 100;
  return simpleInterest;
}

console.log("1000, 5, 1", calculateSimpleInterest(1000, 5, 1));
console.log("20000, 9, 10", calculateSimpleInterest(20000, 9, 10));
console.log("20000, 8.75, 10", calculateSimpleInterest(20000, 8.75, 10));
console.log("20000.88, 8.75, 10", calculateSimpleInterest(20000.88, 8.75, 10));
