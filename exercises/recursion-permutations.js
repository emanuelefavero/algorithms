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
// O(n!) factorial time complexity
function generatePermutations(array) {
  // base case
  if (array.length === 0) {
    console.log(permutation)
    return
  }

  for (let i = 0; i < array.length; i++) {
    let item = array.shift() // remove first item from array
    permutation.push(item) // add item to permutation
    generatePermutations(array) // recursive call
    array.push(item) // add item back to array
    permutation.pop() // remove last item
  }
}

let array = [1, 2, 3]
let permutation = []

generatePermutations(array)
