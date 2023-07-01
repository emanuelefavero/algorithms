// Staircase problem - we have s staircase of n steps, a person has the ability to climb 1, 2 or 3 steps at a time.
// How many different possible "paths" can someone take to reach the top?
function numberOfPaths(n) {
  // BASE CASE - hardcoded bottom cases
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2
  if (n === 3) return 4

  return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3)
}

console.log(numberOfPaths(6)) // 24
console.log(numberOfPaths(4)) // 7
console.log(numberOfPaths(3)) // 4

// TIP: You could use this base case that is less intuitive but covers all the base cases with just two lines of code
// if (n < 0) return 0
// if (n === 1 || n === 0) return 1
