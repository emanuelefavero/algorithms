function factorialNoRecursion(number) {
  let result = 1
  for (let i = 1; i <= number; i++) {
    result = result * i
  }

  return result
}

console.log(factorialNoRecursion(1)) // 1
console.log(factorialNoRecursion(2)) // 2
console.log(factorialNoRecursion(3)) // 6

// TIP: This problem can also be achieved with recursion
