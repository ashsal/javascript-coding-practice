function calculateArea(length, width) {
  console.log(`Calculating Area for length ${length} and width ${width}`);
  if (typeof length !== "number") {
    throw new Error("length should be a number");
  }

  if (typeof width !== "number") {
    throw new Error("width should be a number");
  }

  if (length <= 0) {
    throw new RangeError("length should be a positive number");
  }

  if (width <= 0) {
    throw new RangeError("width should be a positive number");
  }
  const result = length * width;
  console.log(`Area for length ${length} and width ${width} is ${result}`);
}

calculateArea(5, 4);
//calculateArea(-5, -4);
//calculateArea(5, -4);
//calculateArea(5, 0);

calculateArea(2.2, 2.4);

//calculateArea("ashish", "saluja");
