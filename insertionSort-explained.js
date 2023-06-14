function insertionSort(array) {
  // Loop through the array, starting at the second element
  for (let i = 1; i < array.length; i++) {
    // Get the current element to be sorted...
    let current = array[i]

    // ... and set up a pointer to the element before it
    let j = i - 1

    // While the pointer is still in range and the element before
    // the current one is greater than the current one...
    while (j >= 0 && array[j] > current) {
      // ... move the greater element forward
      array[j + 1] = array[j]

      // ... and decrement the pointer
      j--
    }

    // When the pointer is no longer in range or the element before
    // the current one is no longer greater than the current one,
    // insert the current element into its correct position
    // TIP: The position will be the right element of the pointer that made the loop stop
    array[j + 1] = current
  }

  return array
}

console.log(insertionSort([3, 2, 5, 4, 1]))
