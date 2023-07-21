// twoSum - check whether an array of numbers contains a pair of two numbers that add up to 10
// O(n)

function twoSum2(array1, array2) {
  let set1 = new Set(array1)

  // Return a filtered array with all the elements that sum up to 10 between array1 and array2
  let output = array2.filter((element) => set1.has(10 - element))

  // Return true or false of output array has elements
  return output.length > 0
}

console.log(twoSum2([5, 1], [5, 2])) // true
console.log(twoSum2([5, 1], [3, 2])) // false
