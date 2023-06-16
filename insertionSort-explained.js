function insertionSort(array) {
  // Loop through the array, starting at the second element (since we will be going backwards on the nested while loop)
  for (let i = 1; i < array.length; i++) {
    // Store the current value from the first loop (i) in a temporary variable
    let current = array[i]

    // and set up a pointer to the element before it
    let position = i

    // While the value to the left of current is greater than current or has not reached the start of the array
    while (position >= 0 && array[position - 1] > current) {
      // Shift all the values to the right to make space for the current value...
      array[position] = array[position - 1]

      // decrement the each value
      position--
    }

    // TIP: Since all of the shifted values were greater than current, we can put current at the current position (which is on the left of all shifted values and on the right of the element that ended the while loop (the smaller element than current))
    // e.g. [smaller element that ended the loop, current, shifted value 2, shifted value 1, previous current position]
    array[position] = current
  }

  return array
}

console.log(insertionSort([3, 2, 5, 4, 1]))
