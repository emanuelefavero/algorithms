// O(n^2) - quadratic - worst case
// O(n log n) - quasilinear - average and best case
// (n) space

function quickSort(array) {
  if (array.length <= 1) return array

  let pivot = array[0]
  let left = []
  let right = []

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([3, 1, 5, 2, 4])) // [ 1, 2, 3, 4, 5 ]
