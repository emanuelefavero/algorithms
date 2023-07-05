// Given an array of positive numbers, write a function that returns the greatest product of any 3 numbers
// Use sorting with a time complexity of O(n log n), even if there are faster implementations
// Assume that there will be at least 3 values in the array
function greatestProductOf3(array) {
  array.sort((a, b) => a - b)

  return (
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
  )
}

console.log(greatestProductOf3([5, 1, 4, 3, 2])) // 60
// 5 * 4 * 3 = 5 * 4 = 20, 20 * 3 = 60
