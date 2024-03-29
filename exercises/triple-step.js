// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs
// O(3^n) - exponential time
function countWays(n) {
  if (n < 0) return 0
  if (n === 0) return 1

  return countWays(n - 1) + countWays(n - 2) + countWays(n - 3)
}

console.log(countWays(4)) // 7
