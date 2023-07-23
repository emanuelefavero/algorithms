// Create a function that takes two arrays of integers and returns an array of two indexes of the numbers that need to be swapped in order for the two arrays to have the same sum
function sumSwap(array1, array2) {
  let hashTable = {}
  let sum1 = 0
  let sum2 = 0

  // Get sum of array1 and store each number in a hash table
  array1.forEach((number, index) => {
    sum1 += number
    hashTable[number] = index
  })

  // Get sum of array2
  array2.forEach((number) => {
    sum2 += number
  })

  // Calculate how much a number in array2 needs to be shifted in order for the two arrays to have the same sum
  let shiftAmount = (sum1 - sum2) / 2

  // Loop through array2 and check if the shifted number exists in the hash table
  for (let i = 0; i < array2.length; i++) {
    let target = array2[i] + shiftAmount

    if (hashTable[target]) return [hashTable[target], i]
  }

  return false
}

// ---------------------

console.log(sumSwap([5, 3, 3, 7], [4, 1, 1, 6])) // [3, 0], The numbers at index 3 in array1 and index 0 in array2 need to be swapped in order for the two arrays to have the same sum

console.log(sumSwap([5, 3, 3, 7], [4, 1, 1, 5])) // false, The two arrays cannot have the same sum by swapping any two numbers
