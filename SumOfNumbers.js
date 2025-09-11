function sum(a, b) {
  console.log("Creating sum of", a, b);
  if (typeof a !== "number") {
    throw new Error("a should be a number");
  }

  if (typeof b !== "number") {
    throw new Error("b should be a number");
  }
  const result = a + b;
  console.log("sum of", a, "and", b, "is", result);
}

sum(2, 3);

sum(1000, 5000);

sum(0, 8);

sum(-1, -5);

//sum("ashish", "saluja");

console.log("typeof 1", typeof 1);
console.log("typeof ashish", typeof "ashish");

//isNaN
