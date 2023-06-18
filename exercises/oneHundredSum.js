// Check if an array has a pair of numbers that add up to 100
// O(n)

function hasNumbersAddingTo100(array) {
  const complements = {}

  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    if (complements[100 - num]) {
      return true // Found a pair of numbers adding to 100
    }
    complements[num] = true
  }

  return false
}

console.log(hasNumbersAddingTo100([50, 50])) // true

console.log(hasNumbersAddingTo100([50, 25, 25])) // false
