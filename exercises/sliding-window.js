// * Sliding Window Technique

// Given an array of integers of size ‘n’, our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array

// The sliding window technique can help us solve these kind of problems in O(n) time complexity instead of O(n^2) time complexity (preventing the use of nested loops)

/**
 * @param {number[]} array
 * @param {number} k
 * @returns {number} maxSum
 */

// O(n) time complexity
function getMaxSum(array, k) {
  // Get the sum of the first k elements
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += array[i]
  }

  // Set the maxSum to the sum of the first k elements
  let maxSum = sum

  // Iterate through the array starting from the kth element
  for (let i = k; i < array.length; i++) {
    sum += array[i] // Add the next element
    sum -= array[i - k] // Remove the first element
    maxSum = Math.max(sum, maxSum) // Update the maxSum
  }

  return maxSum
}

console.log(getMaxSum([2, 2, 2, 2, 5], 2)) // 7, since 2 + 5 = 7
console.log(getMaxSum([2, 3, 4, 1, 5], 3)) // 10, since 4 + 1 + 5 = 10
