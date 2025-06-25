// Print Fibonacci numbers recursively
function fib(n, a = 0, b = 1) {
  if (n < 0) return

  console.log(a)

  fib(n - 1, b, a + b)
}

fib(10) // 0 1 1 2 3 5 8 13 21 34 55
