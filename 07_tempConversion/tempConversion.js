const convertToCelsius = function(temperature) { 
  const celsiusTemperature = Math.round(((temperature - 32) * 5/9) * 10)
   / 10;
  return celsiusTemperature;
};

const convertToFahrenheit = function(temperature) {
  const fahrenheitTemperature = Math.round(((temperature * 9/5) + 32) *10)
  / 10;
  return fahrenheitTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
