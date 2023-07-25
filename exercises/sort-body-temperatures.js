// Create a function that takes an array of floating point numbers that represent body temperatures from 97.0 to 99.0 and sort them from lowest to highest
// TIP: Since we already know the range of values (97.0 to 99.0) we can use a hash table to store the occurrence of each temperature and then loop over the hash table to populate a new array with the correct number of each temperature
// TIP: Multiply the temperature by 10 so that we can use integers to loop over the hash table instead of floats

// O(n)
function sortTemperatures(array) {
  let hashTable = {}
  let result = []

  // Store the occurrence of each temperature in a hash table
  for (let i = 0; i < array.length; i++) {
    if (hashTable[array[i]]) {
      hashTable[array[i]] += 1
    } else {
      hashTable[array[i]] = 1
    }
  }

  // Multiply the temperature by 10 so that we can use integers to loop over the hash table instead of floats
  let temperature = 970

  // Iterate over the hash table from 970 to 990 and populate a new array with the correct number of each temperature
  while (temperature <= 990) {
    // Divide the temperature by 10 to get the original float value
    if (hashTable[temperature / 10]) {
      for (let j = 0; j < hashTable[temperature / 10]; j++) {
        result.push(temperature / 10)
      }
    }

    temperature += 1
  }

  return result
}

console.log(sortTemperatures([98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5]))
