function isPalindrome(inputString) {
  // validate that inputString is a valid string
  const lowerCaseInputString = inputString.toLowerCase();
  for (let i = 0; i <= lowerCaseInputString.length / 2; i++) {
    const indexFromEnd = lowerCaseInputString.length - 1 - i;
    if (lowerCaseInputString[i] !== lowerCaseInputString[indexFromEnd]) {
      return false;
    }
  }

  return true;
}
function isPalindrome2(inputString) {
  const lowerCaseInputString = inputString.toLowerCase();
  const splittedString = lowerCaseInputString.split("");
  const reversedArray = splittedString.reverse();
  const reversedString = reversedArray.join("");
  console.log(reversedString);
  if (reversedString === lowerCaseInputString) {
    return true;
  } else {
    return false;
  }
}

console.log("Madam", isPalindrome("Madam"));
console.log("abba", isPalindrome("abba"));
console.log("level", isPalindrome("level"));
console.log("ashish", isPalindrome("ashish"));

console.log("isPalindrome2");
console.log("Madam", isPalindrome2("Madam"));
console.log("abba", isPalindrome2("abba"));
console.log("level", isPalindrome2("level"));
console.log("ashish", isPalindrome2("ashish"));
