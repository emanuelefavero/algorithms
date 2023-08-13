// O(n^2)
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      // We only need to change the sign here to make it ascending or descending
      if (array[j] < array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }

  return array
}

console.log(bubbleSort([4, 2, 5, 1, 3])) // [5, 4, 3, 2, 1]
