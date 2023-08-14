// O(n^2)

function bubbleSort3(array) {
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

console.log(bubbleSort3([3, 5, 1, 2, 4])) // [1, 2, 3, 4, 5]
