function convertToCelsius(fahrenheitValue) {
  return Math.round((fahrenheitValue - 32) / 1.8)
}

console.log(convertToCelsius(0)) // -18
console.log(convertToCelsius(32)) // 0
console.log(convertToCelsius(72)) // 22
console.log(convertToCelsius(90)) // 32
console.log(convertToCelsius(100)) // 38
