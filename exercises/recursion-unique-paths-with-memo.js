// Unique Paths
// Write a function that accepts a number of rows and a number of columns.
// Calculate the number of possible "shortest" paths from the upper-leftmost square to the lower-rightmost square

// O(n * m) - n = rows, m = columns
// with memoization
function uniquePaths(rows, columns, memo = {}) {
  if (rows === 1 || columns === 1) return 1

  // TIP: You can pass arrays of numbers to objects in Javascript. They will be converted to string keys
  if (!memo[[rows, columns]]) {
    memo[[rows, columns]] =
      // TIP: Don't forget to pass the memo to the recursive function call
      uniquePaths(rows - 1, columns, memo) +
      uniquePaths(rows, columns - 1, memo)
  }

  return memo[[rows, columns]]
}

console.log(uniquePaths(3, 7)) // 28
console.log(uniquePaths(2, 2)) // 2
console.log(uniquePaths(4, 4)) // 20
