// O(n)

function doubleThenSum(array) {
  let sum = 0

  array.forEach((number) => {
    sum += number * 2
  })

  return sum
}

console.log(doubleThenSum([2, 4])) // 12
