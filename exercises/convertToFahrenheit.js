function convertToFahrenheit(celsiusValue) {
  return Math.round(celsiusValue * 1.8 + 32)
}

console.log(convertToFahrenheit(-10)) // 14
console.log(convertToFahrenheit(0)) // 32
console.log(convertToFahrenheit(10)) // 50
console.log(convertToFahrenheit(24)) // 75
console.log(convertToFahrenheit(32)) // 90
console.log(convertToFahrenheit(100)) // 212
