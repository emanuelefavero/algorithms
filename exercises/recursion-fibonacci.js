// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, typically starting with 0 and 1
// Recursive approach with memoization to prevent sub-problems overlapping (same recursive calls called again with no reason)
// Memoization is one of two techniques of dynamic programming
// Dynamic programming is a technique that optimizes recursive code by solving each subproblem only once (it stores the solution in a table or variable)

// O(n)
function fibonacci(n, memo = {}) {
  if (n === 0 || n === 1) return n

  if (!memo[n]) {
    memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo)
  }

  return memo[n]
}

console.log(fibonacci(10)) // 55
console.log(fibonacci(6)) // 8
console.log(fibonacci(3)) // 2
console.log(fibonacci(2)) // 1
console.log(fibonacci(1)) // 1
