// Implement division using recursion
function division(a, b) {
  if (a < b) return 0

  return 1 + division(a - b, b)
}

console.log(division(10, 2)) // 5

// Implement division using the division operator
// O(a / b)
function division2(a, b) {
  return a / b
}

console.log(division2(10, 2)) // 5
