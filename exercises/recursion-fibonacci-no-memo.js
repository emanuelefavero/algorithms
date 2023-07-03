// This is a fibonacci sequence algorithm with recursion that doesn't use memoization so it is really inefficient.
// It is only shown because it is very simple to write

// O(2^n) - exponential time complexity
function fibonacci(n) {
  if (n === 0 || n === 1) return n

  return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(10)) // 55
console.log(fibonacci(6)) // 8
console.log(fibonacci(3)) // 2
console.log(fibonacci(2)) // 1
console.log(fibonacci(1)) // 1

// ! always use memoization with recursion for the fibonacci sequence
// @see exercises/recursion-fibonacci.js
