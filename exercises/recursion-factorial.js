// Factorial - multiply an integer by all the positive integers less than that integer up until 1
function factorial(number) {
  if (number <= 1) return 1

  return number * factorial(number - 1)
}

// When reading a recursive function. It helps to calculate from the base case up:
console.log(factorial(3)) // 6
// return 1
// return 2 * 1 = 2, (1 here is the result of the base case)
// return 3 * 2 = 6, (2 here is the result of the previous calculation)

// TIP: In recursion the first function call will not end until all the previous calls are called (starting from the base case)
