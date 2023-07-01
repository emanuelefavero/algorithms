// Write a function that returns the first index that contains the character "x"
// Assume that it will always be at least one "x"
function getFirstXIndex(string, index = 0) {
  if (string.length === 0) return false

  if (string[index] === 'x') return index

  return getFirstXIndex(string, index + 1)
}

console.log(getFirstXIndex('bmx')) // 2
console.log(getFirstXIndex('x')) // 0
console.log(getFirstXIndex('abc x')) // 4
console.log(getFirstXIndex('')) // false
