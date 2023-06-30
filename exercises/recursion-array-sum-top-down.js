// Return the sum of all the numbers in the array
// "Top Down" approach using recursion
function sum(array) {
  if (array.length === 1) return array[0]

  return array[0] + sum(array.slice(1))
}

console.log(sum([2, 2, 2])) // 6
console.log(sum([2, 10])) // 12
