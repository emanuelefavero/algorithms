// O(n log n) - quasilinear

function mergeSort(array) {
  if (array.length <= 1) return array

  let middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let sorted = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift()) // remove first element and push to sorted
    } else {
      sorted.push(right.shift())
    }
  }

  return [...sorted, ...left, ...right]
}

console.log(mergeSort([5, 3, 4, 2, 1])) // [1, 2, 3, 4, 5]
