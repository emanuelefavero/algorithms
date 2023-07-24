// Create a function that takes an array containing several different values (even duplicates) and reorder the data so that the same values are grouped together
// TIP: We don't care about the order of the values, we just want the same values to be grouped together
// O(n)

function groupArray(array) {
  let hashTable = {}
  let newArray = []

  // Store the occurrence of each string in a hash table
  for (let i = 0; i < array.length; i++) {
    if (hashTable[array[i]]) {
      hashTable[array[i]] += 1
    } else {
      hashTable[array[i]] = 1
    }
  }

  // Iterate over the hash table and populate a new array with the correct number of each string
  for (let key in hashTable) {
    // TIP: For example, if the hash table at key "a" has a value of 3, then 3 "a" will be added to newArray
    for (let j = 0; j < hashTable[key]; j++) {
      newArray.push(key)
    }
  }

  return newArray
}

console.log(groupArray(['b', 'c', 'a', 'b', 'a', 'c', 'a']))
// [ 'b', 'b', 'c', 'c', 'a', 'a', 'a' ]
