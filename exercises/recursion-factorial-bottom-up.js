// In calculation problems, we can use two different recursion approaches to solve the problem
// "Top down" - starting from the greatest number and going down
// "Bottom Up" - starting from the smallest number and going up
// The following is the "Bottom Up" approach
// TIP: The "Bottom Up" approach in this case is not particularly elegant and does not add much value over using a classic loop
// TIP: The "Top down" approach is only achievable through recursion

function factorial(number, index = 1, result = 1) {
  if (index > number) return result

  // TIP: By passing the result as a parameter, we can keep track of it
  return factorial(number, index + 1, result * index)
}

console.log(factorial(3)) // 6, 3 * 2 * 1
console.log(factorial(4)) // 24, 4 * 3 * 2 * 1
