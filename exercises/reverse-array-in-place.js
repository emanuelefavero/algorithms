// O(n)
function reverse(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }
}

console.log(reverse([1, 2, 3])) // [3, 2, 1]
