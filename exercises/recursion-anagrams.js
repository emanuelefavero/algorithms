// Write a function that returns an array of all anagrams of a given string. An anagram is a reordering of all the characters within a string

// O(n!) - factorial time
// e.g. O(3!) = 3 * 2 * 1
// TIP: factorial time is one of the worst time complexity, worse than O(n^3)
function getAnagrams(string) {
  // BASE CASE
  if (string.length === 1) return [string]

  const anagrams = []

  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i]

    // Remove the current character from the string
    const remainingCharacters = string.slice(0, i) + string.slice(i + 1)

    // Recursively find the anagrams of the remaining characters
    const subAnagrams = getAnagrams(remainingCharacters)

    // Add the current character to the beginning of each sub-anagram
    subAnagrams.forEach((subAnagram) => {
      anagrams.push(currentCharacter + subAnagram)
    })
  }

  return anagrams
}

console.log(getAnagrams('a')) // ['a]
console.log(getAnagrams('abc')) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
