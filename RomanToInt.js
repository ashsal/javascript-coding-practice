const romanNumberChars = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumeralExceptions = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (romanNumber) {
  //console.log(romanNumber);
  const splittedRomanNumber = romanNumber.split("");

  let result = 0;
  let skipNext = false;
  for (let i = 0; i < splittedRomanNumber.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }
    if (i != splittedRomanNumber.length - 1) {
      const currentChar = splittedRomanNumber[i];
      const nextChar = splittedRomanNumber[i + 1];
      const twoCharsCombined = `${currentChar}${nextChar}`;
      if (romanNumeralExceptions[twoCharsCombined]) {
        result = result + romanNumeralExceptions[twoCharsCombined];
        skipNext = true;
      }
    }

    if (!skipNext) {
      result = result + romanNumberChars[splittedRomanNumber[i]];
    }
  }

  return result;
};

console.log("III", romanToInt("III"));
console.log("LVIII", romanToInt("LVIII"));
console.log("MCMXCIV", romanToInt("MCMXCIV"));
