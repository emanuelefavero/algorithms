// TIP: A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers
// Write a function that takes a number as an argument and returns true if the number is a prime number and false if it is not. Do not use recursion
function isPrime(n) {
  if (n <= 1) return false

  for (let i = 2; i < n; i++) {
    // If n is divisible by i, then n is not prime
    if (n % i === 0) return false
  }

  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(11)) // true
console.log(isPrime(33)) // false
