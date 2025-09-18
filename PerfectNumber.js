function isPerfectNumber(inputNumber) {
  // validate that inputNumber is a positive integer
  const properDivisors = [];
  for (let i = 1; i <= inputNumber / 2; i++) {
    if (inputNumber % i === 0) {
      properDivisors.push(i);
    }
  }

  let sum = 0;
  properDivisors.forEach((e) => {
    sum = sum + e;
  });

  return sum === inputNumber;
}
console.log(6, isPerfectNumber(6));
console.log(5, isPerfectNumber(5));
console.log(28, isPerfectNumber(28));
console.log(8128, isPerfectNumber(8128));
