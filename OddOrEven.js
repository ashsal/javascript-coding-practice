function checkEvenOrOdd(num) {
  // Write validation to check if num is a number or not
  // typeof
  const remainder = num % 2;
  console.log(num, remainder);
  if (remainder === 0) {
    return "even";
  } else {
    return "odd";
  }
}

function checkEvenOrOdd2(num) {
  // Validation and check num is a number
  return num % 2 === 0 ? "even" : "odd";
}

const evenOrOdd = checkEvenOrOdd(13);
console.log("13", evenOrOdd);
console.log("2", checkEvenOrOdd(2));
console.log("0", checkEvenOrOdd(0));
console.log("-1", checkEvenOrOdd(-1));
console.log("-2", checkEvenOrOdd(-2));
//console.log("ashish", checkEvenOrOdd("ashish"));

console.log("checkEvenOrOdd2");
const evenOrOdd2 = checkEvenOrOdd2(13);
console.log("13", evenOrOdd2);
console.log("2", checkEvenOrOdd2(2));
console.log("0", checkEvenOrOdd2(0));
console.log("-1", checkEvenOrOdd2(-1));
console.log("-2", checkEvenOrOdd2(-2));
