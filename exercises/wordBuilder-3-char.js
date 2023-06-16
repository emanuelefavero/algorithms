// Collect every combination of 3 character strings built from an array of single characters

// O(n^3) - cubic (O of n cubed)

function wordBuilder3Characters(array) {
  let output = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (
          array[j] !== array[i] &&
          array[k] !== array[i] &&
          array[j] !== array[k]
        ) {
          output.push(array[i] + array[j] + array[k])
        }
      }
    }
  }

  return output
}

console.log(wordBuilder3Characters(['a', 'b', 'c', 'd']))

/*
[
  'abc',
  'abd',
  'acb',
  'acd',
  'adb',
  'adc',
  'bac',
  'bad',
  'bca',
  'bcd',
  'bda',
  'bdc',
  'cab',
  'cad',
  'cba',
  'cbd',
  'cda',
  'cdb',
  'dab',
  'dac',
  'dba',
  'dbc',
  'dca',
  'dcb',
]
*/
