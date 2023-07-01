// Total number of characters in array of strings
function countCharacters(array) {
  if (array.length === 0) return 0

  return array[0].length + countCharacters(array.slice(1))
}

console.log(countCharacters(['a', 'ab', 'abc'])) // 6
console.log(countCharacters(['a', 'b'])) // 2
console.log(countCharacters(['abc'])) // 3
