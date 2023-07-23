// Memoization is a technique of storing the results of expensive function calls and returning the cached result when the same inputs occur again

// TIP: The following is an inefficient square function that uses memoization to improve its performance

const memo = {}

function inefficientSquare(n) {
  if (memo[n]) return memo[n]

  let result = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1
    }
  }

  memo[n] = result

  return result
}

console.log(inefficientSquare(30000))
console.log(inefficientSquare(30000))
console.log(inefficientSquare(30000))
console.log(inefficientSquare(30000))
