// O(n^2) - quadratic - worst case
// O(n) - linear - best case

// TIP: Insertion Sort is generally the fastest sorting algorithm when the data set is nearly sorted. In other cases Quick Sort is a better option

function insertionSort(array) {
  // Loop through the array, starting at the second element (since we will be going backwards on the nested while loop)
  for (let i = 1; i < array.length; i++) {
    // Store the current value from the first loop (i) in a temporary variable
    let current = array[i]

    // While the value to the left of current is greater than current or has not reached the start of the array
    while (i >= 0 && array[i - 1] > current) {
      // Shift all the values to the right to make space for the current value...
      array[i] = array[i - 1]

      // decrement the each value
      // TIP: once the first loop ends, i will reset to 1++ (see first for loop) so on the second loop i will have a value of 2
      i--
    }

    // TIP: Since all of the shifted values were greater than current, we can put current at the current i (which is on the left of all shifted values and on the right of the element that ended the while loop (the smaller element than current))
    // e.g. [smaller element that ended the loop, current, shifted value 2, shifted value 1, previous current i]
    array[i] = current
  }

  return array
}

console.log(insertionSort([3, 2, 5, 4, 1]))
