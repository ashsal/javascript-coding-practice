function factoria1(inputNumber) {
  console.log(`calculating factorial for ${inputNumber}`);
  if (typeof inputNumber !== "number") {
    throw new Error("inputNumber must a positive number");
  }

  if (inputNumber < 0) {
    throw new Error("inputNumber must a positive number");
  }

  if (!Number.isInteger(inputNumber)) {
    throw new Error("inputNumber must a positive number");
  }

  let result = 1;

  for (let i = inputNumber; i > 0; i--) {
    result = result * i;
    console.log(i);
  }

  return result;
}

function factorial2(inputNumber) {
  // validation

  if (inputNumber === 0 || inputNumber === 1) {
    return 1;
  }

  return inputNumber * factorial2(inputNumber - 1);
  // 4 * factorial2(3) = 24
  // 3 * factorial2(2) = 6
  // 2 * factorial2(1) = 2
  // 1
}

const result = factoria1(4);
console.log("4", result);
console.log("3", factoria1(3));
console.log("10", factoria1(10));

//factoria1("ashish");
//factoria1(-2);
//factoria1(2.5);

console.log("factorial2");

console.log("4", factorial2(4));
console.log("3", factorial2(3));
console.log("10", factorial2(10));
