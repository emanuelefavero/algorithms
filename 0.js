function division(a, b) {
  // initialize count and sum
  let count = 0
  let sum = b // sum starts at b

  // add b to sum until sum is greater than a, increment count each time
  // Example: 10 / 2, 2 + 2 + 2 + 2 + 2 = 10, count = 5
  while (sum <= a) {
    sum += b
    count++
  }

  return count
}

console.log(division(10, 2)) // 5

function division2(a, b) {
  if (a < b) return 0
  return 1 + division2(a - b, b)
}

console.log(division2(10, 2)) // 5

function division3(a, b) {
  return a / b
}

console.log(division3(10, 2)) // 5
