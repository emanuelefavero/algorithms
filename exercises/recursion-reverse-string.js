// Reverse a string using "Top Down" recursion approach
function reverse(string) {
  if (string.length === 1) return string[0]

  // Since we want to reverse the string, we pass all the characters except the first character to the recursive function and we add the first character at the end of the returned string
  return reverse(string.slice(1)) + string[0]
}

console.log(reverse('hello')) // olleh
