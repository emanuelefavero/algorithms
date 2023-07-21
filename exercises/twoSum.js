// twoSum - check whether an array of numbers contains a pair of two numbers that add up to 10
// O(n)

function twoSum(array) {
  let hashTable = {}

  for (let i = 0; i < array.length; i++) {
    if (hashTable[10 - array[i]]) return true

    hashTable[array[i]] = true
  }

  return false
}

console.log(twoSum([1, 2, 5, 9])) // true
console.log(twoSum([1, 2, 5])) // false
