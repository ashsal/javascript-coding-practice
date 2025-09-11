function smallestOfThree(a, b, c) {
  // validation to check if a b and c are numbers
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}

function smallestOfThree2(a, b, c) {
  let smallestNumber = a;
  if (b < smallestNumber) {
    smallestNumber = b;
  }
  if (c < smallestNumber) {
    smallestNumber = c;
  }

  return smallestNumber;
}

console.log("3,1,6 -> ", smallestOfThree(3, 1, 6));
console.log("5,-2,8 -> ", smallestOfThree(5, -2, 8));
console.log("3,3,3 -> ", smallestOfThree(3, 3, 3));
console.log("3,3,1 -> ", smallestOfThree(3, 3, 1));

console.log("smallest number 2");

console.log("3,1,6 -> ", smallestOfThree2(3, 1, 6));
console.log("5,-2,8 -> ", smallestOfThree2(5, -2, 8));
console.log("3,3,3 -> ", smallestOfThree2(3, 3, 3));
console.log("3,3,1 -> ", smallestOfThree2(3, 3, 1));
