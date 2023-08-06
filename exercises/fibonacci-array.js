// Generate an array with the fibonacci sequence up to n
// O(n)
function fibonacci(n) {
  let sequence = [0, 1]

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1])
  }

  return sequence
}

console.log(fibonacci(8)) // [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
