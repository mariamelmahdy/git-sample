var Converter = {}

Converter.celsiusToFahrenheit = function(cDegree) {
  return 0;
}

Converter.fahrenheitToCelsius = function(fDegree) {
  return Math.round((fDegree - 32) * 5 / 9);
}

module.exports = Converter;
