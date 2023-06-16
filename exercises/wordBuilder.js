// Collect every combination of two character strings built from an array of single characters

// O(n^2) - quadratic

function wordBuilder(array) {
  let output = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== array[i]) {
        output.push(array[i] + array[j])
      }
    }
  }

  return output
}

console.log(wordBuilder(['a', 'b', 'c', 'd']))
// ['ab', 'ac', 'ad', 'ba', 'bc', 'bd', 'ca', 'cb', 'cd', 'da', 'db', 'dc']
