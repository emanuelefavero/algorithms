function insertionSort(array) {
  // Loop through the array, starting at the second element (since we will be going backwards on the nested while loop)
  for (let i = 1; i < array.length; i++) {
    // Store the current value from the first loop (i) in a temporary variable
    let current = array[i]

    // ... and set up a pointer to the element before it
    let position = i - 1

    // While the value to the left of current is greater than current or has not reached the start of the array
    while (position >= 0 && array[position] > current) {
      // Shift all the values to the right to make space for the current value...
      array[position + 1] = array[position]

      // decrement the each value
      position--
    }

    // ...Assign the current value to its correct position (to the first value that doesn't match the while loop)
    array[position + 1] = current
  }

  return array
}

console.log(insertionSort([3, 2, 5, 4, 1]))
