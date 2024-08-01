function round1dp(num) {
  return (Math.round(num * 10) / 10);
}

const convertToCelsius = function(f) {
  return round1dp((f - 32) * 5/9, 1);
};

const convertToFahrenheit = function(c) {
  return round1dp(c * 9/5 + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
