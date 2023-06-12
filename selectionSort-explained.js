// O(n ^ 2) - quadratic

// TIP: Actually O(n^2 / 2), twice as fast than bubbleSort

// In Selection Sort, the first smallest element is selected from the unsorted array and placed at the first position. After that second smallest element is selected and placed in the second position and so on. This process is repeated until all the elements are placed at their correct positions.

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // Find the lowest element in the array
    let lowest = i

    // Start a second loop to compare all the elements after the current i element
    for (let j = i + 1; j < array.length; j++) {
      // If the current element is lower than the lowest, set the lowest to the current element
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }

    // swap the current element with the lowest element
    ;[array[i], array[lowest]] = [array[lowest], array[i]]
  }

  return array
}

console.log(selectionSort([2, 4, 1, 3, 5])) // [ 1, 2, 3, 4, 5 ]
