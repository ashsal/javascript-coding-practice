function convert(temperatureInCelsius) {
  // validation here, check temperatureInCelsius is a number
  let result = (temperatureInCelsius * 9) / 5 + 32;

  return Math.round(result);
}
console.log("27", convert(27));
console.log("34", convert(34));
