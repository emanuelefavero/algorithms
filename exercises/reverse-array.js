// O(n)
function reverse(array) {
  let reversed = []

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i])
  }

  return reversed
}

console.log(reverse([1, 2, 3])) // [3, 2, 1]
