// O(n) time | O(n) space
function factorial(n) {
  if (n <= 1) return 1

  return n * factorial(n - 1)
}

console.log(factorial(4)) // 24, 4 * 3 * 2 * 1
