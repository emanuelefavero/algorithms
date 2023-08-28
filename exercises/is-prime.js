// TIP: A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers
// Write a function that takes a number as an argument and returns true if the number is a prime number and false if it is not. Do not use recursion
function isPrime(n) {
  if (n < 2) return false

  for (let i = 2; i < n; i++) {
    // If n is divisible by i, then n is not prime
    if (n % i === 0) return false
  }

  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(11)) // true
console.log(isPrime(33)) // false

// -------------
// isPrime - improved
// We could improve the function by only checking up to the square root of n
// If n is divisible by a number greater than its square root, then it is also divisible by a number smaller than it
function isPrime2(n) {
  if (n < 2) return false

  let squareRoot = Math.sqrt(n)

  for (let i = 2; i < squareRoot; i++) {
    if (n % i === 0) return false
  }

  return true
}

console.log(isPrime2(1)) // false
console.log(isPrime2(11)) // true
console.log(isPrime2(33)) // false
