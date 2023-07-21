// twoSum - check whether an array of numbers contains A PAIR of two numbers that add up to n
// O(n)

function twoSum(array, n) {
  let hashTable = {}

  for (let i = 0; i < array.length; i++) {
    if (hashTable[n - array[i]]) return true

    hashTable[array[i]] = true
  }

  return false
}

console.log(twoSum([1, 2, 5, 9], 10)) // true
console.log(twoSum([1, 2, 5], 10)) // false
console.log(twoSum([10, 5, 4], 15)) // true
