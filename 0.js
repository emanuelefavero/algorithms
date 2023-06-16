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
