function getNumberOfInstancesInArray(array) {
  let instances = {}

  array.forEach((element) => {
    if (instances[element]) instances[element] += 1
    else instances[element] = 1
  })

  return instances
}

console.log(getNumberOfInstancesInArray(['hi', 'hi', 'hola']))
// { hi: 2, hola: 1 }
