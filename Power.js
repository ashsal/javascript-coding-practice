function calculatePower(base, exponent) {
  // validate that base and exponent are positive integers
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
    console.log(i, result);
  }

  return result;
}

console.log("2, 4", calculatePower(2, 4));
//Math.pow
