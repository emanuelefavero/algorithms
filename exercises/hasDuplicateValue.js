// O(n)

// Check to see if an array has any duplicate values
function hasDuplicateValue(array) {
  let values = []

  for (let i = 0; i < array.length; i++) {
    // If the value is already in the array, return true.
    if (values[array[i]] === 1) return true

    // Otherwise, add the value to the array
    values[array[i]] = 1
  }

  return false
}

console.log(hasDuplicateValue([1, 4, 2, 1]))
console.log(hasDuplicateValue([1, 4, 2]))

// TIP: The clever part here is that we are assigning the value of 1 (which is an arbitrary value) at the index of the values array by using the value of the input array as the index. If there will be duplicates the index will already have the value of 1 so the function will return true

// TIP: It works with strings (and other data) too
