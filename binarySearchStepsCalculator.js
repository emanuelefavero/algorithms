// NOTE: This function calculates how many steps a binarySearch algorithm would take to find a value in an array of a given size

// define a function that calculate how many steps it takes for a number to reach 1 after being divided by 2 until it reaches 1
function binarySearchStepsCalculator(arraySize) {
  let steps = 0
  while (arraySize > 1) {
    steps++
    arraySize = arraySize / 2
  }
  return steps
}

console.log(binarySearchStepsCalculator(100)) // 7
console.log(binarySearchStepsCalculator(1000)) // 10
// NOTE: It takes 7 steps to find a value in an array of size 100

// In binary search, each time we double the size of the array, we add one step to the number of steps it takes to find a value in the array
