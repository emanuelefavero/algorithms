let steps = 0
function mergeSort(array) {
  steps++

  if (array.length < 2) return array

  let middle = array.length / 2
  let left = mergeSort(array.slice(0, middle))
  let right = mergeSort(array.slice(middle))

  return merge(left, right)
}

function merge(left, right) {
  let sorted = []

  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.shift())
    else sorted.push(right.shift())
  }

  return [...sorted, ...left, ...right]
}

let array = [
  62, 28, 96, 17, 56, 37, 75, 10, 53, 13, 70, 81, 69, 35, 50, 67, 55, 24, 11,
  47, 88, 23, 87, 71, 58, 4, 84, 95, 99, 85, 94, 7, 43, 64, 59, 9, 34, 73, 40,
  14, 63, 36, 22, 92, 15, 21, 78, 18, 54, 80, 3, 51, 46, 98, 79, 33, 93, 61, 25,
  39, 68, 30, 74, 49, 31, 86, 5, 77, 19, 66, 72, 6, 26, 60, 97, 16, 41, 83, 48,
  91, 1, 76, 27, 42, 57, 8, 38, 12, 29, 32, 65, 89, 90, 20, 82, 2, 45, 44, 100,
  52, 45,
]

// BEWARE: Run on mergeSort at a time to properly count steps

console.log(mergeSort(array))
// console.log(mergeSort([1, 2]))
// console.log(mergeSort([2, 1, 5, 3, 4]))

console.log('steps:', steps)
