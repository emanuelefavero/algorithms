// Print all the numbers in array of numbers which also contains sub arrays of numbers (print only the numbers, not the array)
// TIP: Recursion is perfect for task where you don't know how many sub layers there are

function printNumbersInArrayAndSubArrays(array) {
  array.forEach((item) => {
    if (typeof item === 'number') {
      console.log(item)
    } else {
      // Recursion
      printNumbersInArrayAndSubArrays(item)
    }
  })
}

const array = [2, 4, [6, 8, [10, 12], 14], 16]

printNumbersInArrayAndSubArrays(array) // 2 4 6 8 10 12 14 16

// TIP: You can also check if the current item is an array by replacing the else statement with this line:
// else if (Array.isArray(item)) {
