// Write a function that determines whether two given strings are anagrams of each other
// TIP: We are going to use hash tables to solve this problem. We are gonna convert each string into a hash table, and then compare the hash tables. If the hash tables are the same, then the strings are anagrams of each other
function anagrams(string1, string2) {
  string1HashTable = {}
  string2HashTable = {}

  // Create hash table out of string1
  for (let i = 0; i < string1.length; i++) {
    if (string1HashTable[string1[i]]) {
      string1HashTable[string1[i]] += 1
    } else {
      string1HashTable[string1[i]] = 1
    }
  }

  // Create hash table out of string2
  for (let i = 0; i < string2.length; i++) {
    if (string2HashTable[string2[i]]) {
      string2HashTable[string2[i]] += 1
    } else {
      string2HashTable[string2[i]] = 1
    }
  }

  // Compare hash tables
  for (let key in string1HashTable) {
    // If any key in string1HashTable does not exist in string2HashTable, return false
    if (string1HashTable[key] !== string2HashTable[key]) return false
  }

  return true
}

console.log(anagrams('hello', 'llohe')) // true
console.log(anagrams('hello', 'ciao')) // false
