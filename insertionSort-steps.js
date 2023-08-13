// O(n^2) - quadratic - worst case
// O(n) - linear - best case

function insertionSort(array) {
  let steps = 0

  for (let i = 1; i < array.length; i++) {
    let current = array[i]

    while (i >= 0 && array[i - 1] > current) {
      array[i] = array[i - 1]
      i--

      steps++
    }

    array[i] = current
    steps++
  }

  return { array, steps }
}

console.log(insertionSort([37, 5])) // steps: 2
console.log(insertionSort([37, 5, 21])) // steps: 4
console.log(insertionSort([37, 5, 21, 44, 13])) // steps: 9

console.log(insertionSort([37, 5, 21, 44, 13, 26, 3, 18])) // steps: 24

console.log(
  insertionSort([
    37, 5, 21, 44, 13, 26, 3, 18, 49, 8, 30, 11, 41, 16, 35, 2, 47, 23, 28, 7,
    38, 19, 46, 15, 31,
  ]) // steps: 162
)

console.log(
  insertionSort([
    37, 5, 21, 44, 13, 26, 3, 18, 49, 8, 30, 11, 41, 16, 35, 2, 47, 23, 28, 7,
    38, 19, 46, 15, 31, 10, 40, 33, 25, 48, 1, 14, 34, 45, 27, 12, 22, 6, 42, 9,
    36, 29, 4, 20, 39, 32, 24, 50, 17, 43,
  ])
) // steps: 616

console.log(
  insertionSort([
    62, 28, 96, 17, 56, 37, 75, 10, 53, 13, 70, 81, 69, 35, 50, 67, 55, 24, 11,
    47, 88, 23, 87, 71, 58, 4, 84, 95, 99, 85, 94, 7, 43, 64, 59, 9, 34, 73, 40,
    14, 63, 36, 22, 92, 15, 21, 78, 18, 54, 80, 3, 51, 46, 98, 79, 33, 93, 61,
    25, 39, 68, 30, 74, 49, 31, 86, 5, 77, 19, 66, 72, 6, 26, 60, 97, 16, 41,
    83, 48, 91, 1, 76, 27, 42, 57, 8, 38, 12, 29, 32, 65, 89, 90, 20, 82, 2, 45,
    44, 100, 52, 45,
  ])
) // steps: 2695

console.log(insertionSort([1, 2, 3, 4, 5])) // steps: 4
