// Create a function that prints all the numbers of the Fibonacci sequence up to a given number
function fib(n) {
  let previous = 0
  let current = 1

  console.log(previous)
  console.log(current)

  for (let i = 2; i <= n; i++) {
    let next = previous + current
    console.log(next)
    previous = current
    current = next
  }
}

fib(10) // 0 1 1 2 3 5 8 13 21 34 55
