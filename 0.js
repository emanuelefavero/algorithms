// O(n^2)
function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

console.log(bubbleSort([4, 1, 5, 3, 2])) // [ 1, 2, 3, 4, 5 ]
