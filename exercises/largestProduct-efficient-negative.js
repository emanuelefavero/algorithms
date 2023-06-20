// Find the largest product (result of multiple) of three numbers in an array
// Check for negative numbers
// O(n log n) - quasilinear (the time complexity of the sorting part)
function largestProduct(array) {
  array.sort((a, b) => a - b)

  let largestProduct1 =
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3]

  if (array[0] < 0 && array[1] < 0) {
    const largestProduct2 = array[0] * array[1] * array[array.length - 1]
    return largestProduct2
  }

  return largestProduct1
}

console.log(largestProduct([-2, -10, 5, 10])) // 200, -2 * -10 * 10
console.log(largestProduct([-2, 10, 10, 20, 1])) // 2000, 10 * 10 * 20
