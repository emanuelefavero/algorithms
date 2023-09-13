// O(2^n) - exponential time
function fibonacci(n) {
  if (n === 0 || n === 1) return n

  return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(10)) // 55
console.log(fibonacci(6)) // 8
