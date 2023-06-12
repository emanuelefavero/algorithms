// O(n^2) - quadratic

// TIP: Even though selection sort is twice as fast of bubble sort and it takes O(n^2 / 2), in Big O Notation we drop regular numbers and describe selection sort as just O(n^2)

function selectionSort(array) {
  let steps = 0

  for (let i = 0; i < array.length; i++) {
    let min = i

    for (let j = i + 1; j < array.length; j++) {
      steps++
      if (array[j] < array[min]) {
        min = j
      }
    }

    if (min !== i) {
      steps++
      ;[array[i], array[min]] = [array[min], array[i]]
    }
  }

  return { array, steps }
}

console.log(selectionSort([3, 1, 4, 5, 2]))
console.log(selectionSort([1, 2, 3, 4, 5]))
