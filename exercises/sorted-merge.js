// Write a method to merge two sorted arrays into one sorted array
function merge(array1, array2) {
  let result = []
  let i = 0
  let j = 0

  // while both arrays have elements
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i])
      i++
    } else {
      result.push(array2[j])
      j++
    }
  }

  // if array1 is longer than array2, push the rest of array1 to result
  while (i < array1.length) {
    result.push(array1[i])
    i++
  }

  // if array2 is longer than array1, push the rest of array2 to result
  while (j < array2.length) {
    result.push(array2[j])
    j++
  }

  return result
}

console.log(merge([1, 3, 5], [2, 4, 6])) // [ 1, 2, 3, 4, 5, 6 ]
