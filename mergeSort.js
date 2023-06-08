// O(n log n) time complexity
// O(n log n) - quasilinear

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  let middle = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, middle))
  let right = mergeSort(array.slice(middle))

  return merge(left, right)
}

function merge(left, right) {
  let sorted = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // shift() removes the first element and returns it
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  return [...sorted, ...left, ...right]
}

console.log(mergeSort([5, 3, 4, 2, 1])) // [1, 2, 3, 4, 5]
