// Print strings in array
// RECURSIVE APPROACH
function printStringsInArray(array) {
  if (array.length <= 0) return ''

  // array.shift returns and removes the first element of the array
  return array.shift() + ' ' + printStringsInArray(array)
}

console.log(printStringsInArray(['hi', 'hello', 'hola'])) // hi hello hola

// TIP: With so simple examples, there is no need to use recursion.
// Recursion can be beneficial when having a clean and simple code is important (and of course when the recursive approach is clearly faster than the other)

// LOOP APPROACH
function printStringsInArray(array) {
  let mergedString = ''

  // Loop thru array
  array.forEach((string) => {
    // Loop thru characters
    for (let j = 0; j < string.length; j++) {
      mergedString += string[j]
    }

    mergedString += ' '
  })

  return mergedString
}

console.log(printStringsInArray(['hi', 'hello', 'hola'])) // hi hello hola
