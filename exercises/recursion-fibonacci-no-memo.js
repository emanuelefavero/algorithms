// This is a fibonacci sequence algorithm with recursion that doesn't use memoization so it is really inefficient.
// It is only shown because it is very simple to write
function fibonacci(n) {
  if (n === 0 || n === 1) return n

  return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(10)) // 55
console.log(fibonacci(6)) // 8
console.log(fibonacci(3)) // 2
console.log(fibonacci(2)) // 1
console.log(fibonacci(1)) // 1
