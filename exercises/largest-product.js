// Find the largest product (result of multiple) of three numbers in an array
// O(n^3) - cubic

function largestProduct(array) {
  let largestProduct = array[0] * array[1] * array[2]

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] * array[j] * array[k] > largestProduct) {
          largestProduct = array[i] * array[j] * array[k]
        }
      }
    }
  }

  return largestProduct
}

console.log(largestProduct([2, 10, 10, 20])) // 2000
console.log(largestProduct([2, 10, 10, 20, 1])) // 2000
