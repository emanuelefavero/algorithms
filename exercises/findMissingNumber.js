// Use sorting to write a function that only takes O(n log n) to find the missing number in an array of positive integers, (even if there are faster implementations)
function findMissingNumber(array) {
  array.sort((a, b) => a - b)

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i) return i
  }

  return -1
}

console.log(findMissingNumber([2, 5, 4, 1, 0])) // 3
console.log(findMissingNumber([2, 5, 4, 1, 0, 3])) // -1
