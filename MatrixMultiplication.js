function matrixMultiplication(array1, array2) {
  // validate array1, array2 are arrays
  const array1Rows = array1.length;
  const array1Columns = array1[0].length;

  const array2Rows = array2.length;
  const array2Columns = array2[0].length;

  console.log("array1Rows has dimensions", array1Rows, array1Columns);
  console.log("array2Rows has dimensions", array2Rows, array2Columns);

  if (array1Columns !== array2Rows) {
    throw new Error("array1Columns and array2Rows should match");
  }

  console.log("result will have dimensions", array1Rows, array2Columns);

  const result = []; // array1Rows x array2Columns

  for (let i = 0; i < array1Rows; i++) {
    for (let j = 0; j < array2Columns; j++) {
      console.log(i, j);
      let cellValue = 0;

      if (!result[i]) {
        result[i] = [];
      }

      for (let n = 0; n < array2Rows; n++) {
        cellValue += array1[i][n] * array2[n][j];
      }

      result[i][j] = cellValue;
    }
  }

  return result;
}

const array1 = [
  [1, 2, 3],
  [4, 5, 6],
];

const array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

const result = matrixMultiplication(array1, array2);

console.log("result", result);
