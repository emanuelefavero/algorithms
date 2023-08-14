// O(n ^ 2) - quadratic time complexity O(n squared)

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }

  return array
}

console.log(bubbleSort([3, 5, 1, 2, 4])) // [ 1, 2, 3, 4, 5 ]
