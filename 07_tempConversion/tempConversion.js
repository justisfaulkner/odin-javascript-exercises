const convertToCelsius = function(degreesF) {
  // (32°F − 32) × 5/9
  return Math.round(((degreesF - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(degreesC) {
  // (0°C × 9/5) + 32
  return Math.round(((degreesC * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
