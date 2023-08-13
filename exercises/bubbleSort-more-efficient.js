// O(n^2)
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        swapped = true
      }
    }

    if (!swapped) break // if no swaps were made, the array is sorted
  }

  return array
}

console.log(bubbleSort([4, 2, 5, 1, 3])) // [1, 2, 3, 4, 5]
