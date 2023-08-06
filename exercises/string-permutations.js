// TIP: A permutation is a unique arrangement of the elements (in this case the characters)

// Write a function that returns all the permutations of a given string
// O(n!)
function permutation(string, prefix = '') {
  // BASE CASE
  if (string.length === 0) {
    console.log(prefix)
  } else {
    for (let i = 0; i < string.length; i++) {
      // Remove the character at index i
      let rem = string.substring(0, i) + string.substring(i + 1)

      // Recursion
      permutation(rem, prefix + string.charAt(i))
    }
  }
}

permutation('abc')
