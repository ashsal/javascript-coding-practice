function reverseString(inputString) {
  if (typeof inputString !== "string") {
    throw new Error("inputString must be a valid string");
  }
  console.log("Reversing", inputString);
  let result = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    console.log(inputString[i]);
    result = result + inputString[i];
  }

  return result;
}

function reverseString2(inputString) {
  //   const splittedString = inputString.split("");
  //   console.log(splittedString);
  //   const reversedStringArray = splittedString.reverse();
  //   const result = reversedStringArray.join("");

  //   console.log(result);

  return inputString.split("").reverse().join("");
}

const myString = "Ashish";
console.log("1", myString[1]);
console.log(myString.length);
const result = reverseString("Ashish");
console.log("Ashish", result);

console.log("Software development", reverseString("Software development"));

console.log("reverseString2");
console.log("Ashish", reverseString2("Ashish"));
console.log("Software development", reverseString2("Software development"));
//reverseString(true);
