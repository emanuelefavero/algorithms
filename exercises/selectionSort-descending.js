function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let max = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[max]) {
        max = j
      }
    }

    let temp = array[i]
    array[i] = array[max]
    array[max] = temp
  }

  return array
}

console.log(selectionSort([2, 5, 1, 3, 4])) // [ 5, 4, 3, 2, 1 ]
