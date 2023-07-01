// Staircase problem - we have s staircase of n steps, a person has the ability to climb 1, 2 or 3 steps at a time.
// How many different possible "paths" can someone take to reach the top?
function numberOfPaths(n) {
  // BASE CASE
  // these two lines also covers if we have 2 steps
  // since 2 - 1 = 1, 2 - 2 = 0, 2 - 3 = -1
  // n = 1 returns 1, n = 0 returns 1, n = -1 returns 0
  // 1 + 1 + 0 = 2
  // If we have a staircase of 2 steps we can reach the top in 2 possible paths
  if (n < 0) return 0
  if (n === 1 || n === 0) return 1

  return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3)
}

console.log(numberOfPaths(6)) // 24
console.log(numberOfPaths(4)) // 7
console.log(numberOfPaths(3)) // 4

// TIP: This base case is less intuitive but covers all the base cases with just two lines of code
// TIP: You could instead hard code the bottom cases
// if (n <= 0) return 0
// if (n === 1) return 1
// if (n === 2) return 2
// if (n === 3) return 4
