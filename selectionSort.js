// O(n ^ 2) - quadratic

// TIP: Actually O(n^2 / 2), twice as fast than bubbleSort

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }

    ;[array[i], array[lowest]] = [array[lowest], array[i]]
  }

  return array
}

console.log(selectionSort([2, 4, 1, 3, 5])) // [ 1, 2, 3, 4, 5 ]
