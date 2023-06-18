// Merge two sorted arrays into one sorted array
// O(n * m) - n where N is the size of the first array and M is the size of the second array

function merge(array1, array2) {
  let merged = []
  let i = 0
  let j = 0

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      merged.push(array1[i])
      i++
    } else {
      merged.push(array2[j])
      j++
    }
  }

  // Add the remaining elements from array1, if any
  while (i < array1.length) {
    merged.push(array1[i])
    i++
  }

  // Add the remaining elements from array2, if any
  while (j < array2.length) {
    merged.push(array2[j])
    j++
  }

  return merged
}

console.log(merge([1, 3], [2, 4, 6])) // [ 1, 2, 3, 4, 6 ]
