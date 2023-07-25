// Create a function that accepts an array of integers and returns the length of the longest consecutive sequence among them
// Example: [2, 5, 3, 6, 7] returns 3 because 5, 6, 7 is the longest consecutive sequence in the array

// O(n)
function longestSequenceLength(array) {
  let hashTable = {}
  let longestSequenceLength = 0

  // Populate the hash table with the values from the array
  for (let i = 0; i < array.length; i++) {
    hashTable[array[i]] = true
  }

  // Iterate over the array and check if the current number is the start of a sequence
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i]

    // If the current number is the start of a sequence (meaning there isn't any number lower than it)...
    if (!hashTable[currentNumber - 1]) {
      let currentSequenceLength = 1

      // ...While the next number in the sequence exists, increment the sequence length
      while (hashTable[currentNumber + 1]) {
        currentNumber += 1
        currentSequenceLength += 1

        // If the current sequence length is greater than the longest sequence length, update the longest sequence length
        if (currentSequenceLength > longestSequenceLength) {
          longestSequenceLength = currentSequenceLength
        }
      }
    }
  }

  return longestSequenceLength
}

console.log(longestSequenceLength([2, 5, 3, 6, 7])) // 3, (5, 6, 7)
console.log(longestSequenceLength([1, 5, 3, 6])) // 2, (5, 6)
