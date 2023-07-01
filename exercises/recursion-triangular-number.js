// Write a function that accept a number n and returns the correct triangular number in the sequence (n + n - 1)
function triangularNumber(n) {
  if (n === 1) return 1

  return n + triangularNumber(n - 1)
}

console.log(triangularNumber(3)) // 6
console.log(triangularNumber(7)) // 21
console.log(triangularNumber(6)) // 28

// TIP: A triangular number is the sum of consecutive positive integers up to a given number, forming a triangular shape when represented visually
// TIP: List Of Triangular Numbers. 0, 1, 3, 6, 10, 15, 21, 28, 36...
