// O(n ^ 2) - quadratic time complexity

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

// --------------------------
// 2nd implementation
function bubbleSort2(array) {
  let swap = true

  do {
    swap = false

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp

        swap = true
      }
    }
  } while (swap)

  return array
}

console.log(bubbleSort2([3, 5, 1, 2, 4])) // [1, 2, 3, 4, 5]
