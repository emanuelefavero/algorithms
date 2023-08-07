// Write a function that calculates and prints the powers of 2 up to a given exponent 'n'
// O(log n)
function powerOf2(n) {
  if (n === 0) return 1

  if (n === 1) {
    console.log(1)
    return 1
  }

  let previous = powerOf2(Math.floor(n / 2))
  let current = previous * 2
  console.log(current)
  return current
}

console.log(powerOf2(10))
