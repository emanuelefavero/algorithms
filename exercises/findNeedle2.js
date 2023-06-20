//  finds a needle in a haystack - returns the index of the needle
// (trova l'ago nel pagliaio)
// O(n * m) - quadratic time

function findNeedle(needle, haystack) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false
        break
      }
    }

    if (found) {
      return i
    }
  }
  return -1
}

const haystack = 'Hello, this is a haystack.'
const needle = 'is'
const index = findNeedle(needle, haystack)
console.log(index)
