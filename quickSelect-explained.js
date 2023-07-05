// O(n) - since we only do the recursion on half the sub-arrays the time complexity is O(2n) which in Big O becomes O(n)

// Quick Select is a variation of Quick Sort that uses a Binary Search approach. It can be used to find the kth smallest or largest element in an array.
// TIP: The term "kth" is a mathematical notation used to represent an arbitrary element or position in a sequence or collection.
// "k" is the index of the element in the sorted array. For example, the 2nd smallest element is the element at index 1 in the sorted array.
function quickSelect(array, k) {
  if (array.length === 1) return array[0]

  // Pick a random value from the array to be the pivot
  let pivotIndex = Math.floor(Math.random() * array.length)
  let pivot = array[pivotIndex]
  let left = []
  let right = []

  // Partition into left and right sub-arrays
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue // skip pivot element to prevent infinite recursion

    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  // Recurse on left or right subarray depending on value of k
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
