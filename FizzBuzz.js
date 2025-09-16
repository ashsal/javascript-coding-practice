function fizzBuzz(inputNumber) {
  // validate that inputNumber is positive integer number
  const result = "";
  for (let i = 1; i <= inputNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(36);
