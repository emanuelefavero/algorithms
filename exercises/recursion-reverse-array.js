// O(n)
function reverse(array) {
  // base case
  if (array.length === 0) return []

  return [array.pop(), ...reverse(array)]
}

console.log(reverse([1, 2, 3])) // [3, 2, 1]
