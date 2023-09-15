// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs
// O(n) - with memoization
function countWays(n, memo = {}) {
  if (n < 0) return 0
  if (n === 0) return 1

  if (!memo[n])
    memo[n] =
      countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo)

  return memo[n]
}

console.log(countWays(4)) // 7

// TIP: This problem is similar to the Fibonacci problem, but instead of adding the last two numbers, we add the last three numbers
