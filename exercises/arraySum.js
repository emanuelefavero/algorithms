// O(n)

function arraySum(array) {
  return array.reduce((sum, number) => {
    return sum + number
  }, 0) // 0 is the initial sum value
}

function arraySum2(array) {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum
}

console.log(arraySum([1, 2, 3])) // 6
console.log(arraySum2([1, 2, 3])) // 6
