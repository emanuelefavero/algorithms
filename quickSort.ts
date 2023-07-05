function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array

  let pivot = array[0]
  let left: number[] = []
  let right: number[] = []

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2, 1, 5, 3, 4])) // [1, 2, 3, 4, 5]
