// * RECURSIVE SUM - Write a function that takes a number as an argument and returns the sum of all the numbers from 1 up to the number passed in
function sum(n) {
  if (n <= 0) return 0

  return n + sum(n - 1)
}

console.log(sum(5))
