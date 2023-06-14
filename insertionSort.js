// O(n^2) - quadratic - worst case
// O(n) - linear - best case

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = current
  }

  return array
}

console.log(insertionSort([3, 2, 5, 4, 1]))
