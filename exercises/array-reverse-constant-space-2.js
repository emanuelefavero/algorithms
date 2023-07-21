// Create a function that reverses an array that takes O(1) space

// O(1) space
function reverse(array) {
  let start = 0
  let end = array.length - 1

  while (start < end) {
    // Swap
    ;[array[start], array[end]] = [array[end], array[start]]

    start++
    end--
  }

  return array
}

console.log(reverse([1, 2, 3, 4])) // [4, 3, 2, 1]
