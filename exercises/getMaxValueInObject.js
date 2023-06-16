function getMaxValueInObject(object) {
  let maxValue = 0
  let maxKey = null

  for (key in object) {
    if (object[key] > maxValue) {
      maxValue = object[key]
      maxKey = key
    }
  }

  return { maxKey, maxValue }
}

console.log(getMaxValueInObject({ hi: 2, hola: 1 }))
// { maxKey: 'hi', maxValue: 2 }
