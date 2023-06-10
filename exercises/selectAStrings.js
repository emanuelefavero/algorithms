// O(n)

// return an new array that contains only the strings that starts with "a"
function selectAStrings(array) {
  return array.filter((string) => string[0].toLowerCase() === 'a')
}

function selectAStrings2(array) {
  let newArray = []

  array.forEach((string) => {
    if (string[0] === 'A' || string[0] === 'a') {
      newArray.push(string)
    }
  })

  return newArray
}

console.log(selectAStrings(['orange', 'apple', 'kiwi', 'avocado']))
console.log(selectAStrings2(['orange', 'apple', 'kiwi', 'avocado']))
// [ 'apple', 'avocado' ]
