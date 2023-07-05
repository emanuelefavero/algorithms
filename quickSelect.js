function quickSelect(array, k) {
  if (array.length === 1) return array[0]

  let pivotIndex = Math.floor(Math.random() * array.length)
  let pivot = array[pivotIndex]
  let left = []
  let right = []

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue

    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  if (k === left.length) {
    return pivot
  } else if (k < left.length) {
    return quickSelect(left, k)
  } else {
    return quickSelect(right, k - left.length - 1)
  }
}

// Find the 2nd smallest element (1 index is the second element)
console.log(quickSelect([100, 20, 40, 30, 50, 10], 1)) // 20

// Find the 4th smallest element (3 index is the fourth element)
console.log(quickSelect([100, 20, 40, 30, 50, 10], 3)) // 40
