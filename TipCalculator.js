function calculateTip(baseAmount, tipPercentages, locale, currency) {
  // validate that baseAmount is a number and tipPercentages is an array of numbers
  const result = [];
  for (let i = 0; i < tipPercentages.length; i++) {
    let tipAmount = baseAmount * (tipPercentages[i] / 100);
    tipAmount = tipAmount.toFixed(2);
    const formatter = Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });
    tipAmount = formatter.format(tipAmount);
    result.push(tipAmount);
  }

  return result;
}

console.log(
  "1000 -> 5, 10, 20",
  calculateTip(1000, [5, 10, 20], "en-US", "USD")
);
console.log(
  "1000 -> 5, 10, 20",
  calculateTip(1000.45, [5.5, 10.11, 20.33], "en-US", "USD")
);

console.log(
  "1000 -> 5, 10, 20",
  calculateTip(1000.45, [5.5, 10.11, 20.33], "en-IN", "INR")
);
