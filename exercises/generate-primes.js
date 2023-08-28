// Generate a list of prime numbers from 1 to n
function generatePrimes(n) {
  let primes = []

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i)
  }

  return primes
}

function isPrime(n) {
  if (n < 2) return false

  let squareRoot = Math.sqrt(n)

  for (let i = 2; i <= squareRoot; i++) {
    if (n % i === 0) return false
  }

  return true
}

console.log(generatePrimes(3)) // [2, 3]
console.log(generatePrimes(33)) // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
