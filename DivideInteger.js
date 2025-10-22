var divide = function (dividend, divisor) {
  let isDividendNegative = dividend < 0;
  let isDivisorNegative = divisor < 0;
  let absoluteDividend = Math.abs(dividend);
  let absoluteDivisor = Math.abs(divisor);
  let incrementedDivisor = absoluteDivisor;
  let counter = 0;

  while (absoluteDividend >= incrementedDivisor) {
    incrementedDivisor += absoluteDivisor;
    counter++;
  }

  if (
    (isDividendNegative && !isDivisorNegative) ||
    (!isDividendNegative && isDivisorNegative)
  ) {
    return -counter;
  }
  return counter;
};

console.log("10, 3", divide(10, 3));
console.log("9, 3", divide(9, 3));
console.log("7, 3", divide(7, 3));
console.log("-7, 3", divide(-7, 3));
console.log("7, -3", divide(7, -3));
console.log("-7, -3", divide(-7, -3));
