function calculateAverage(inputNumbers) {
  if (!Array.isArray(inputNumbers)) {
    throw new Error("inputNumbers should be an array");
  }

  const areAllNumbers = inputNumbers.every((num) => typeof num === "number");
  if (!areAllNumbers) {
    throw new Error("inputNumbers should be an array on numbers");
  }

  let sumOfElements = 0;
  for (let i = 0; i < inputNumbers.length; i++) {
    //console.log(inputNumbers[i]);
    sumOfElements += inputNumbers[i];
  }

  const sumOfElementsUsingReduce = inputNumbers.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );

  const average = sumOfElements / inputNumbers.length;
  console.log(
    sumOfElements,
    sumOfElementsUsingReduce,
    inputNumbers.length,
    average
  );
  return average.toFixed(2);
}
console.log("[3, 2, 1]", calculateAverage([3, 2, 1]));
console.log("[1,6,8,56]", calculateAverage([1, 6, 8, 56]));
console.log("[1,2,4]", calculateAverage([1, 2, 4]));
