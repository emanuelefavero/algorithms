// Unique Paths
// Write a function that accepts a number of rows and a number of columns.
// Calculate the number of possible "shortest" paths from the upper-leftmost square to the lower-rightmost square
function uniquePaths(rows, columns) {
  if (rows === 1 || columns === 1) return 1

  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1)
}

console.log(uniquePaths(3, 7)) // 28
console.log(uniquePaths(2, 2)) // 2
console.log(uniquePaths(4, 4)) // 20
