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

function findPalindromes(inputString) {
  // validate inputString is a valid string
  //console.log(inputString.slice(1, 5));
  const result = [];
  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j < inputString.length + 1; j++) {
      const subStr = inputString.slice(i, j);
      if (subStr.length > 1) {
        if (isPalindrome(subStr)) {
          result.push(subStr);
        }
      }
    }
  }

  return result;
}
console.log("ashish", findPalindromes("ashish"));
console.log("madam", findPalindromes("madam"));
console.log("ababapalindromemadam", findPalindromes("ababapalindromemadam"));
console.log("bradarasdmadama", findPalindromes("bradarasdmadama"));
