// Create a function that reverses an array that takes O(1) space

// O(1) constant space complexity
function reverse(array) {
  // We only need to swap half of the array since the other half will be already swapped by the time we reach half of the array
  for (let i = 0; i < array.length / 2; i++) {
    // Swap the first and last elements and so on
    let temp = array[array.length - 1 - i]
    array[array.length - 1 - i] = array[i]
    array[i] = temp
  }

  return array
}

console.log(reverse([1, 2, 3, 4])) // [ 4, 3, 2, 1 ]
