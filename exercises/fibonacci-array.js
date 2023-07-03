function fibonacciArray(n) {
  if (n === 0) return [0]
  if (n === 1) return [1]

  const sequence = [0, 1]

  // TIP: i = 2 is the sequence array length (we start from 2 because we have already assigned the first two numbers 0 and 1 to the array)
  for (let i = 2; i <= n; i++) {
    const current = sequence[i - 1] + sequence[i - 2]

    sequence.push(current)
  }

  return sequence
}

console.log(fibonacciArray(10)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
