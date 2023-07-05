function insertionSort(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let position = i

    while (position >= 0 && array[position - 1] > current) {
      array[position] = array[position - 1]
      position--
    }

    array[position] = current
  }

  return array
}

console.log(insertionSort([3, 1, 2, 5, 4])) // [1, 2, 3, 4, 5]
