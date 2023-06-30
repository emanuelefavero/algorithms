function doubleArray(array, index = 0) {
  if (index >= array.length) return

  array[index] *= 2

  doubleArray(array, index + 1)
}

const array = [1, 2, 3]
doubleArray(array)

console.log(array) // [2, 4, 6]
