function isStrongPassword(passwordString) {
  // validate that passwordString is a string
  const passwordStringCleaned = passwordString.trim();
  if (passwordStringCleaned.length < 8) {
    return false;
  }

  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@";

  let lowerCaseExists = false;
  let upperCaseExists = false;
  let numberExists = false;
  let specialCharExists = false;

  for (let char of passwordStringCleaned) {
    if (lowerCaseCharacters.includes(char)) {
      lowerCaseExists = true;
    } else if (upperCaseCharacters.includes(char)) {
      upperCaseExists = true;
    } else if (numbers.includes(char)) {
      numberExists = true;
    } else if (specialChars.includes(char)) {
      specialCharExists = true;
    }
  }

  if (lowerCaseExists && upperCaseExists && numberExists && specialCharExists) {
    return true;
  }

  return false;
}

console.log("ashish", isStrongPassword("ashish"));
console.log("ashish123", isStrongPassword("ashish123"));
console.log("Ashish123", isStrongPassword("Ashish123"));
console.log("Ashish123!", isStrongPassword("Ashish123!"));
