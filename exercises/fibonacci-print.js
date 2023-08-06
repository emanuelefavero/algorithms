// Create a function that prints all the numbers of the Fibonacci sequence up to a given number
function printFibonacci(n) {
  console.log(0)
  console.log(1)

  let previous = 0
  let current = 1

  for (let i = 2; i <= n; i++) {
    let next = previous + current
    console.log(next)
    previous = current
    current = next
  }
}

printFibonacci(10)
