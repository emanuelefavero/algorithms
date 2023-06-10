// O(n ^ 2) - quadratic time complexity O(n squared)

function bubbleSort(array) {
  // loop through every item in the array except the last one
  for (let i = 0; i < array.length - 1; i++) {
    // * we also subtract i from array.length on the for j loop because the swapped elements at the end of the array will be in the correct place and don't need to be checked anymore
    for (let j = 0; j < array.length - 1 - i; j++) {
      // if the current item is larger than the next item
      if (array[j] > array[j + 1]) {
        // swap the two items
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }

  return array
}

console.log(bubbleSort([3, 5, 1, 2, 4])) // [ 1, 2, 3, 4, 5 ]

// TIP: Very often (but not always) when you see nested loops the algorithm will be O(n ^ 2)
