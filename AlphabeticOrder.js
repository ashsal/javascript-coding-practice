console.log("a".charCodeAt());
console.log("b".charCodeAt());
console.log("z".charCodeAt());

console.log("a" < "b"); // 97 < 98

console.log("a" < "z");
console.log("b" < "a");

function isAlphabeticOrder(inputString) {
  // validate inputString is a valid string
  let inputStringSanitized = inputString.replace(/ /g, "");
  inputStringSanitized = inputStringSanitized.toLowerCase();
  //console.log(inputStringSanitized);

  for (let i = 0; i < inputStringSanitized.length - 1; i++) {
    //console.log(inputStringSanitized[i], inputStringSanitized[i + 1]);
    if (inputStringSanitized[i] > inputStringSanitized[i + 1]) {
      return false;
    }
  }

  return true;
}
console.log("As hish", isAlphabeticOrder("As hish"));
console.log("acehz", isAlphabeticOrder("acehz"));
console.log("acehza", isAlphabeticOrder("acehza"));
