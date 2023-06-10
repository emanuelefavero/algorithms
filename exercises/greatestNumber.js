// O(n)

function greatestNumber(array) {
  let greatestNumber = array[0]

  array.forEach((number) => {
    if (number > greatestNumber) {
      greatestNumber = number
    }
  })

  return greatestNumber
}

console.log(greatestNumber([20, 100, 50])) // 100

// ------------
// 2nd implementation - with reduce (still O(n))
function greatestNumber2(array) {
  return array.reduce(
    (greatestNumber, number) =>
      number > greatestNumber ? number : greatestNumber,

    // assign the first element to the greatestNumber initial value
    array[0]
  )
}

console.log(greatestNumber2([20, 100, 50])) // 100
