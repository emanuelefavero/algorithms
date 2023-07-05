// O(n^2) - quadratic - worst case
// O(n log n) - quasilinear - average and best case

// Quick Sort is a Divide and Conquer algorithm that uses recursion. It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted using the same process, and the sorted sub-arrays are combined to obtain the final sorted array.

// TIP: Quick Sort is generally the fastest sorting algorithm for large datasets unless the data is nearly sorted. In that case Insertion Sort is a better option.

function quickSort(array) {
  // 1. return the array if it has only one element (BASE CASE)
  if (array.length <= 1) return array

  // 2. assign the first element of the array as pivot. Create two empty arrays left and right
  let pivot = array[0]
  let left = []
  let right = []

  // 3. loop through the array starting from the second element and push the element to the left array if it is less than the pivot, otherwise push it to the right array
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  // 4. return the sorted array by recursively calling quickSort on the left array, then the pivot, then the right array
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([3, 1, 5, 2, 4])) // [ 1, 2, 3, 4, 5 ]
