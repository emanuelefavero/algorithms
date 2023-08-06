// Permutations are all possible orderings of a given array of items
// For example, if we have 3 items, say 1, 2, 3, then all possible permutations are:
// 1, 2, 3
// 1, 3, 2
// 2, 1, 3
// 2, 3, 1
// 3, 1, 2
// 3, 2, 1
// The number of permutations is the factorial of the number of items
// 3! = 3 * 2 * 1 = 6

// * PERMUTATIONS - Write a function that takes an array of items and returns all possible permutations of those items
// O(n!) factorial
function generatePermutations(array, permutations = []) {
  // BASE CASE
  if (array.length === 0) {
    console.log(permutations)
    return
  }

  for (let i = 0; i < array.length; i++) {
    let item = array.shift() // remove first item from array and save it to item
    permutations.push(item) // add item to permutations
    generatePermutations(array, permutations) // recursive call
    array.push(item) // add item back to array
    permutations.pop() // remove last item from permutations
  }
}

generatePermutations([1, 2, 3])
