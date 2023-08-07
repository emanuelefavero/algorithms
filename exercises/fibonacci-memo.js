// This is a classic example of dynamic programming and memoization
// O(n)
function fibonacci(n, memo = {}) {
  if (n === 0 || n === 1) return n

  if (!memo[n])
    return (memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo))

  return memo[n]
}

console.log(fibonacci(10)) // 55
console.log(fibonacci(6)) // 8
console.log(fibonacci(3)) // 2
console.log(fibonacci(2)) // 1
console.log(fibonacci(1)) // 1
