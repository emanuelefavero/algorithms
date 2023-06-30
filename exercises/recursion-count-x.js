// Count how many x's a string has
function countX(string) {
  // BASE CASE
  if (string.length === 0) return 0

  // IF CHAR IS x
  if (string[0] === 'x') return 1 + countX(string.slice(1)) // add 1

  // IF CHAR IS NOT x
  return countX(string.slice(1)) // remove first character
}

console.log(countX('ab x cd x')) // 2
console.log(countX('x')) // 1
console.log(countX('ab')) // 0
