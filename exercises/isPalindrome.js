// isPalindrome - check whether a string is the same when reversed
// O(n / 2) real - O(n) in Big O

function isPalindrome(string) {
  let left = 0
  let right = string.length - 1

  while (left < string.length / 2) {
    if (string[left] !== string[right]) return false

    left++
    right--
  }

  return true
}

console.log(isPalindrome('hello')) // false
console.log(isPalindrome('kayak')) // true
