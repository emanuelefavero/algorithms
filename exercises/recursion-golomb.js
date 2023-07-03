// Golomb sequence - is a mathematical sequence which is very inefficient by nature. Thanks to memoization the algorithm time complexity is reduced greatly
// From O(2^n) exponential to O(n) linear
// @see https://en.wikipedia.org/wiki/Golomb_sequence?useskin=vector

// O(n)
function golomb(n, memo = {}) {
  if (n === 1) return 1

  if (!memo[n]) {
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo)
  }

  return memo[n]
}

console.log(golomb(10)) // 5
console.log(golomb(4)) // 3
console.log(golomb(100)) // 21
