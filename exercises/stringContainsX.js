// stringContainsX - return whether or not a capital "X" is present in a string

function stringContainsX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'X') return true
  }

  return false
}

console.log(stringContainsX('RELAX')) // true
console.log(stringContainsX('hello')) // false
