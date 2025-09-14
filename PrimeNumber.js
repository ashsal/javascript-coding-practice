function isPrime(inputNumber) {
  // validation for positive integer
  let result = true;

  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      result = false;
      break;
    }
  }

  return result;
}

function isPrime2(inputNumber) {
  // validation for positive integer
  let result = true;

  if (inputNumber === 2) {
    result = true;
  } else if (inputNumber % 2 === 0) {
    result = false;
  }

  if (result === true) {
    for (let i = 3; i < inputNumber; i = i + 2) {
      if (inputNumber % i === 0) {
        result = false;
        break;
      }
    }
  }

  return result;
}

console.log("5", isPrime(5));
console.log("6", isPrime(6));
console.log("2", isPrime(2));
console.log("97", isPrime(97));

console.log("isPrime2");

console.log("5", isPrime2(5));
console.log("6", isPrime2(6));
console.log("2", isPrime2(2));
console.log("97", isPrime2(97));
