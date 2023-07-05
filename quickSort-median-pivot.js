function quickSort(array) {
  if (array.length <= 1) return array

  // TIP: Assigning the median as a pivot instead of the first or last element decreases the chances of encountering worst-case scenarios.
  // Especially when the array is almost sorted
  let medianIndex = Math.floor(array.length / 2)
  let pivot = array[medianIndex]
  let left = []
  let right = []

  for (let i = 0; i < array.length; i++) {
    // This line is necessary to prevent incorrect sorting or infinite recursion loops when the array has duplicate values
    if (i === medianIndex) continue

    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 2, 8, 4, 2, 6, 7]))
// [2, 3, 4, 5, 6, 7, 8]
