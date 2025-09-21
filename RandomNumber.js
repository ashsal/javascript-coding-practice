function createRandomNumber(maxNumber) {
  // validate that maxNumber is a positive integer
  //console.log(Math.random()); // 0 - 1
  const result = Math.floor(Math.random() * maxNumber) + 1; // 0 - less than the maxNumber
  console.log(result);
}

let i = 0;
while (i < 30) {
  createRandomNumber(90);
  i++;
}

const minNumber = 11;
const maxNumber = 21; // Dont include 21
// 11-20
let j = 0;
console.log(minNumber, maxNumber);
while (j < 30) {
  const result =
    Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  j++;
  console.log(result);
}
