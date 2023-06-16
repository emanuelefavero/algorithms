// Calculate the mean average of fahrenheit reading array and also display the average to celsius

// O(n)

function averageCelsius(fahrenheitReading) {
  let sum = fahrenheitReading.reduce((sum, number) => sum + number, 0)
  let average = Math.round(sum / fahrenheitReading.length)

  let celsiusAverage = Math.round((average - 32) / 1.8)

  return { average, celsiusAverage }
}

console.log(averageCelsius([72, 68, 75, 80, 62, 79, 71]))
