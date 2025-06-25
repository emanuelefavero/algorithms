// Print Fibonacci numbers recursively
function fib(n, a = 0, b = 1) {
  if (n < 0) return

  console.log(a)

  fib(n - 1, b, a + b)
}
