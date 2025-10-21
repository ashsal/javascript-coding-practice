var reverse = function (x) {
  //let result = "";
  let result = 0;
  let number = x;

  if (x < 0) {
    number = Math.abs(x);
  }

  while (number > 0) {
    let lastNumber = number % 10;
    number = Math.floor(number / 10);
    //result = result + lastNumber;

    result = result * 10 + lastNumber;
  }

  if (x < 0) {
    //result = `-${result}`;
    result = -result;
  }

  return parseInt(result);
};

console.log("123", reverse(123));
console.log("3104", reverse(3104));
console.log("120", reverse(120));
console.log("-123", reverse(-123));
