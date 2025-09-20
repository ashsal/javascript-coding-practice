const bigString =
  "This is a big string with the word big repeated in the big string.";

console.log(bigString.indexOf("ashish"));
console.log(bigString.indexOf("big"));
console.log(bigString.indexOf("big", 11));
console.log(bigString.indexOf("big", 36));

function findAllOccurences(bigString, word) {
  // validation
  const result = [];
  let index = bigString.indexOf(word);
  while (index != -1) {
    result.push(index);
    index = bigString.indexOf(word, index + 1);
  }

  return result;
}
console.log("ashish", findAllOccurences(bigString, "ashish"));
console.log("big", findAllOccurences(bigString, "big"));
console.log("the", findAllOccurences(bigString, "the"));
