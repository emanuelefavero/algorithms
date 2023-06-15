// O(n^2) - quadratic - worst case
// O(n) - linear - best case

function insertionSort(array) {
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

console.log(insertionSort([3, 2, 5, 4, 1]))
