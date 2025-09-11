function isLeapYear(year) {
  // Validations for positive numbers
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear2(year) {
  // Validations for positive numbers
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function isLeapYear3(year) {
  // Validations for positive numbers
  return year % 4 === 0;
}

function isLeapYearFull(year) {
  if (year % 4 !== 0) {
    return false; // not divisible by 4 → not a leap year
  } else if (year % 100 !== 0) {
    return true; // divisible by 4 but not 100 → leap year
  } else if (year % 400 === 0) {
    return true; // divisible by 100 and 400 → leap year
  } else {
    return false; // divisible by 100 but not 400 → not a leap year
  }
}

console.log("2000", isLeapYear(2000));
console.log("2001", isLeapYear(2001));
console.log("2002", isLeapYear(2002));
console.log("2003", isLeapYear(2003));
console.log("2004", isLeapYear(2004));

console.log("isLeapYear2");

console.log("2000", isLeapYear2(2000));
console.log("2001", isLeapYear2(2001));
console.log("2002", isLeapYear2(2002));
console.log("2003", isLeapYear2(2003));
console.log("2004", isLeapYear2(2004));

console.log("isLeapYear3");

console.log("2000", isLeapYear3(2000));
console.log("2001", isLeapYear3(2001));
console.log("2002", isLeapYear3(2002));
console.log("2003", isLeapYear3(2003));
console.log("2004", isLeapYear3(2004));
