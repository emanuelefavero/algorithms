// O(n^2) - quadratic

// TIP: Even though selection sort is twice as fast of bubble sort and it takes O(n^2 / 2), in Big O Notation we drop regular numbers and describe selection sort as just O(n^2)

function selectionSort(array) {
  let steps = 0
  for (let i = 0; i < array.length; i++) {
    let lowest = i

    for (let j = i + 1; j < array.length; j++) {
      steps++
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }

    steps++
    ;[array[i], array[lowest]] = [array[lowest], array[i]]
  }

  return { array, steps }
}

console.log(selectionSort([3, 2, 4, 1, 5])) // steps: 12
console.log(selectionSort([5, 4, 3, 2, 1])) // steps: 12
console.log(selectionSort([1, 2, 3, 4, 5])) // steps: 10
