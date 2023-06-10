function average(array) {
  const sum = array.reduce((sum, number) => sum + number, 0)

  return sum / array.length
}

function average2(array) {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum / array.length
}

console.log(average([1, 2, 3, 4])) // 2.5
// sum = 1 + 2 + 3 + 4 = 10
// number of elements = 4
// 10 / 4 = 2.5

console.log(average2([1, 2, 3, 4])) // 2.5
