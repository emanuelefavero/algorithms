// Get the first, middle and last value from an array

// O(1) - constant

function arraySample(array) {
  let first = array[0]
  let middle = Math.floor(array.length / 2)
  let last = array[array.length - 1]

  return { first, middle, last }
}

console.log(arraySample([1, 2, 3, 4, 5]))
