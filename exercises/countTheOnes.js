// Count the ones - The input will be an array that contains arrays of ones and zeroes
function countTheOnes(array) {
  let count = 0

  array.forEach((arrays) => {
    arrays.forEach((number) => {
      if (number === 1) count++
    })
  })

  return count
}

console.log(countTheOnes([[0, 1, 1], [1, 0], [1]])) // 4
