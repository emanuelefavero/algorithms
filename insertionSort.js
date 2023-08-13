// O(n^2) - quadratic - worst case
// O(n) - linear - best case

// TIP: once the first loop ends, i will reset to 1++ so on the second loop i will have a value of 2

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]

    while (i >= 0 && array[i - 1] > current) {
      array[i] = array[i - 1]
      i--
    }

    array[i] = current
  }

  return array
}

console.log(insertionSort([3, 2, 5, 4, 1]))
