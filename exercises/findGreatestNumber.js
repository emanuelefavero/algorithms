// Write a function that find the greatest number within an array

// O(n)
function findGreatest(array) {
  let greatest = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > greatest) {
      greatest = array[i]
    }
  }

  return greatest
}

// 2nd implementation (slower)
// O(n log n)
function findGreatest2(array) {
  array.sort((a, b) => a - b)

  return array[array.length - 1]
}

let array = [2, 1, 4, 3, 5]
console.log(findGreatest(array)) // 5
console.log(findGreatest2(array)) // 5
