// Write a function that checks which data is in both arrays
// TIP: Thanks to converting the first array to an hashTable, we can achieve fast lookup and avoid O(n^2) time complexity

// O(n)
function whichDataIsInBothArrays(array1, array2) {
  let hashTable = {}
  let result = []

  for (let i = 0; i < array1.length; i++) {
    hashTable[array1[i]] = true
  }

  for (let i = 0; i < array2.length; i++) {
    if (hashTable[array2[i]]) {
      result.push(array2[i])
    }
  }

  return result
}

console.log(whichDataIsInBothArrays([1, 2, 3, 4], [10, 2, 20, 3])) // [2, 3]
