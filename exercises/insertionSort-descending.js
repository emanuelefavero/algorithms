// O(n^2) - quadratic - worst case
// O(n) - linear - best case

// Insertion sort - descending order
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let position = i

    // The only thing that changes is the comparison operator
    // HERE: array[position - 1] < current
    while (position >= 0 && array[position - 1] < current) {
      array[position] = array[position - 1]
      position--
    }

    array[position] = current
  }

  return array
}

console.log(insertionSort([3, 2, 5, 4, 1])) // [5, 4, 3, 2, 1]
