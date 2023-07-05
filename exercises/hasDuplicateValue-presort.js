// O(n log n) - we can sort the array and then check for duplicates

// TIP: Many problems can be solved by sorting the array first

function hasDuplicateValue(array) {
  array.sort((a, b) => a - b)

  for (let i = 0; i < array.length - 1; i++) {
    // If the value is identical to the next value
    if (array[i] === array[i + 1]) return true
  }

  return false
}

console.log(hasDuplicateValue([2, 1, 3])) // false
console.log(hasDuplicateValue([2, 2, 1, 3])) // true
