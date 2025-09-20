const brackets = {
  "{": "}",
  "(": ")",
  "[": "]",
};

//console.log(brackets["{"]);
//console.log(brackets["("]);
//console.log(brackets["["]);

function isBalanced(inputString) {
  // validate inputString
  const bracketArray = [];
  for (let char of inputString) {
    if (brackets[char]) {
      bracketArray.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpeningBracket = bracketArray.pop();
      if (brackets[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  return bracketArray.length === 0;
}
console.log("[()]", isBalanced("[()]"));
console.log("[(])", isBalanced("[(])"));
console.log("[()", isBalanced("[()"));
