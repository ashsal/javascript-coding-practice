function findLargestInArray(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error("arrayOfNumbers is not an array, please provide an array");
  }

  if (arrayOfNumbers.length <= 0) {
    throw new Error("arrayOfNumbers must have more than 0 elements");
  }

  const arrayNumCheck = arrayOfNumbers.every((num) => typeof num === "number");
  if (!arrayNumCheck) {
    throw new Error("arrayOfNumbers should only have numbers");
  }

  let largestNumber = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > largestNumber) {
      largestNumber = arrayOfNumbers[i];
    }
  }

  return largestNumber;
}

function findLargestInArray2(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error("arrayOfNumbers is not an array, please provide an array");
  }

  if (arrayOfNumbers.length <= 0) {
    throw new Error("arrayOfNumbers must have more than 0 elements");
  }

  const arrayNumCheck = arrayOfNumbers.every((num) => typeof num === "number");
  if (!arrayNumCheck) {
    throw new Error("arrayOfNumbers should only have numbers");
  }

  const result = Math.max(...arrayOfNumbers);
  return result;
}

//findLargestInArray("ashish");
//findLargestInArray([]);

//findLargestInArray(["ashish"]);
console.log("[1, 6, 9, 4]", findLargestInArray([1, 6, 9, 4]));
console.log("[36, 78, 134, 5, 89]", findLargestInArray([36, 78, 134, 5, 89]));

console.log("Math.max", Math.max(4, 6, 7, 8, 9));

console.log("findLargestInArray2");

console.log("[1, 6, 9, 4]", findLargestInArray2([1, 6, 9, 4]));
console.log("[36, 78, 134, 5, 89]", findLargestInArray2([36, 78, 134, 5, 89]));
