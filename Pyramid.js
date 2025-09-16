function generatePyramid(inputNumber) {
  // validate that inputNumber is a positive number
  for (let i = 1; i <= inputNumber; i++) {
    let lineString = "";
    for (let space = 1; space <= inputNumber - i; space++) {
      lineString = lineString + " ";
    }

    for (let count = 1; count <= i; count++) {
      lineString = lineString + count;
    }

    for (let reverseCount = i - 1; reverseCount >= 1; reverseCount--) {
      lineString = lineString + reverseCount;
    }

    console.log(lineString);
  }
}

generatePyramid(9);
