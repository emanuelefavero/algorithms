// Find the largest product (result of multiple) of three numbers in an array
// Assume the array has only positive numbers
// O(n log n) - quasilinear (the time complexity of the sorting part)
function largestProduct(array) {
  array.sort((a, b) => a - b)

  let largestProduct =
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3]

  return largestProduct
}

console.log(largestProduct([2, 10, 10, 20])) // 2000
console.log(largestProduct([2, 10, 10, 20, 1])) // 2000

// TIP: Since the largest product will always be the one from the largest numbers, we simply sort the array and multiply the last 3 numbers
