// The in-place implementation of the quick sort algorithm is a little bit more complex
// O(n^2) worst case time complexity
// O(n log n) time complexity
// O(log n) space complexity

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex

  // loop through the array from the pivotIndex to the endIndex
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++

      // swap the current element with the element at the swapIndex
      swap(array, swapIndex, i)
    }
  }

  // swap the pivot from the start to the swapIndex
  swap(array, pivotIndex, swapIndex)

  return swapIndex // return the pivot index
}

// * QUICK SORT
function quickSort(array, left = 0, right = array.length - 1) {
  // base case
  if (left < right) {
    let pivotIndex = pivot(array, left, right)

    // left
    quickSort(array, left, pivotIndex - 1)

    // right
    quickSort(array, pivotIndex + 1, right)
  }

  return array
}

let array = [4, 8, 2, 1, 5, 7, 6, 3]
quickSort(array)
console.log(array) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
