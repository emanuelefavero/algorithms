// O(n^2)

// We can also create bubbleSort by going down in the first loop and going up in the second loop and looping j until is less than i
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
