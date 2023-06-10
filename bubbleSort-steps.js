// O(n ^ 2) - quadratic time complexity

function bubbleSort(array) {
  let steps = 0
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      steps++

      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }

  // return array
  return { arrayLength: array.length, steps: steps }
}

console.log(bubbleSort([37, 5]))
console.log(bubbleSort([37, 5, 21]))
console.log(bubbleSort([37, 5, 21, 44, 13]))
console.log(bubbleSort([37, 5, 21, 44, 13, 26, 3, 18]))
console.log(
  bubbleSort([
    37, 5, 21, 44, 13, 26, 3, 18, 49, 8, 30, 11, 41, 16, 35, 2, 47, 23, 28, 7,
    38, 19, 46, 15, 31,
  ])
)
console.log(
  bubbleSort([
    37, 5, 21, 44, 13, 26, 3, 18, 49, 8, 30, 11, 41, 16, 35, 2, 47, 23, 28, 7,
    38, 19, 46, 15, 31, 10, 40, 33, 25, 48, 1, 14, 34, 45, 27, 12, 22, 6, 42, 9,
    36, 29, 4, 20, 39, 32, 24, 50, 17, 43,
  ])
)
