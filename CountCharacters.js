// const myObject = {};
// myObject["b"] = 1;
// console.log(myObject["b"]);
// myObject["b"] = myObject["b"] + 1;
// console.log(myObject["b"]);

function countCharacters(inputString) {
  // validate inputString is a valid string
  const result = {};
  const lowerCaseString = inputString.toLowerCase();
  for (i = 0; i < lowerCaseString.length; i++) {
    if (!result[lowerCaseString[i]]) {
      result[lowerCaseString[i]] = 0;
    }

    result[lowerCaseString[i]] = result[lowerCaseString[i]] + 1;
  }

  return result;
}

function countCharacters2(inputString) {
  // validate inputString is a valid string
  const lowerCaseString = inputString.toLowerCase();
  const lowerCaseStringSplitted = lowerCaseString.split("");
  console.log(lowerCaseStringSplitted);
  const result = lowerCaseStringSplitted.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char] = acc[char] + 1;
    return acc;
  }, {});
  return result;
}

//console.log("Ashish saluja", countCharacters("Ashish saluja"));
console.log("Ashish saluja", countCharacters2("Ashish saluja"));
