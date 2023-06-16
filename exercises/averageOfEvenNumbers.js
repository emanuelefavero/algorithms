// O(n) - linear

function averageOfEvenNumbers(array) {
  let sum = 0
  let evenNumbersCount = 0

  array.forEach((number) => {
    if (number % 2 === 0) {
      sum += number
      evenNumbersCount += 1
    }
  })

  let average = sum / evenNumbersCount

  return Number(average.toFixed(1))
}

console.log(averageOfEvenNumbers([1, 2, 3, 4, 2]))
