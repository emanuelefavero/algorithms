// O(1)
function product(a, b) {
  return a * b
}

console.log(product(2, 3))

// O(b)
function product2(a, b) {
  let sum = 0

  for (let i = 0; i < b; i++) {
    sum += a
  }

  return sum
}

console.log(product2(2, 3))
