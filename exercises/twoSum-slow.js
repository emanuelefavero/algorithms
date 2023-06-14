// twoSum - check whether an array of numbers contains a pair of two numbers that add up to 10
// O(n1 * n2)

function twoSum(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] + array2[j] === 10) {
        return true
      }
    }
  }

  return false
}

console.log(twoSum([5, 1], [5, 2])) // true
console.log(twoSum([5, 1], [3, 2])) // false
