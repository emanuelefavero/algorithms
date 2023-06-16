function getNumberOfInstancesInArray(array) {
  let instances = {}

  array.forEach((element) => {
    if (instances[element]) instances[element] += 1
    else instances[element] = 1
  })

  return instances
}

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

// * Mode - The element that appears the most in a data set
function mode(array) {
  let numbers = getNumberOfInstancesInArray(array)

  return getMaxValueInObject(numbers)
}

console.log(mode([3, 4, 4])) // { maxKey: '4', maxValue: 2 }
console.log(mode(['hi', 'hi', 'hola', 'hi'])) // { maxKey: 'hi', maxValue: 3 }
