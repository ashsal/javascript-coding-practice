const myArray = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[1][1]);
console.log(myArray[1][2]);

function transposeMatrix(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw new Error("inputArray should be an array");
  }

  const allAreArrays = inputArray.every((element) => Array.isArray(element));
  if (!allAreArrays) {
    throw new Error("All sub elements of inputArray should be arrays");
  }
  const numberOfColumns = inputArray[0].length;
  const allArrayHaveSameLength = inputArray.every(
    (element) => element.length === numberOfColumns
  );

  if (!allArrayHaveSameLength) {
    throw new Error(
      "All sub elements of inputArray should be array with the same length"
    );
  }

  const numberOfRows = inputArray.length;

  const result = [];

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = inputArray[i][j];
    }
  }

  return result;
}

//transposeMatrix("ashish");
const transposeResult = transposeMatrix([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log(transposeResult);

const transposeResult1 = transposeMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

console.log(transposeResult1);
