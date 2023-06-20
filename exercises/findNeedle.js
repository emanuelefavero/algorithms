//  finds a needle in a haystack - returns the index of the needle
// (trova l'ago nel pagliaio)

// O(n * m) - quadratic time

function findNeedle(needle, haystack) {
  // return haystack.indexOf(needle)
  return haystack.includes(needle)
}

console.log(findNeedle('how', 'hello, how are you?')) // true
console.log(findNeedle('m', 'hello, how are you?')) // true
