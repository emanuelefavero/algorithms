// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, typically starting with 0 and 1
// Bottom-up is one of two techniques of dynamic programming, it uses a loop approach instead of recursion
// Dynamic programming is a technique that optimizes recursive code by solving each subproblem only once (it stores the solution in a table or variable)

// O(n)
function fibonacci(n) {
  if (n === 0) return 0

  let a = 0
  let b = 1

  for (let i = 1; i < n; i++) {
    // a becomes b and b becomes the sum of a and b
    ;[a, b] = [b, a + b]
  }

  return b
}

console.log(fibonacci(10)) // 55
console.log(fibonacci(6)) // 8
console.log(fibonacci(3)) // 2
console.log(fibonacci(2)) // 1
console.log(fibonacci(1)) // 1
