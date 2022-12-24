// Linear Search - O(n)

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i // return index
    }
  }

  return -1
}

console.log(linearSearch([1, 2, 3, 4], 3)) // 2 (value 3 is at index 2)
console.log(linearSearch([1, 2, 3, 4], 6)) // -1 (value 6 is not in the array)
