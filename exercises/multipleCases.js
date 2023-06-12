function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}

// O(n)

function multipleCases(array) {
  array.forEach((string) => {
    console.log(capitalize(string))
    console.log(string.toUpperCase())
    console.log(string.toLowerCase())
  })
}

multipleCases(['hello', 'CIAO'])
