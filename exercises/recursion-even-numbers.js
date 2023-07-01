// Accept an array of numbers and return a new array with just even numbers
function evenNumbers(array) {
  if (array.length <= 0) return []

  // If the current number is even
  if (array[0] % 2 === 0) {
    // return a new array with that number and call again the function recursively
    return [array[0], ...evenNumbers(array.slice(1))]
  }

  return evenNumbers(array.slice(1))
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
