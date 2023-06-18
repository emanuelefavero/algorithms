// isPalindrome2 - This second implementation reverses the string and then compares the reversed string with the original
// BEWARE: This second implementation is less efficient in time complexity. The first is twice as fast even if on the same Big O class of O(n)
// O(n)

function isPalindrome2(string) {
  let reversed = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }

  return reversed === string
}

console.log(isPalindrome2('hello')) // false
console.log(isPalindrome2('kayak')) // true
