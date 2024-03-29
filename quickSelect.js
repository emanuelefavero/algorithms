// O(n) - since we only do the recursion on half the sub-arrays the time complexity is O(2n) which in Big O becomes O(n)

function quickSelect(array, k) {
  if (array.length === 1) return array[0]

  let pivotIndex = Math.floor(Math.random() * array.length)
  let pivot = array[pivotIndex]
  let left = []
  let right = []

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue // skip pivot element to prevent infinite recursion

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

console.log(quickSelect([100, 20, 40, 30, 50, 10], 1)) // 20
console.log(quickSelect([100, 20, 40, 30, 50, 10], 3)) // 40
