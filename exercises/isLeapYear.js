// O(1)

function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

function isLeapYear2(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) return true
    return false
  }

  if (year % 4 === 0) return true
  return false
}

console.log(isLeapYear(400)) // true
console.log(isLeapYear2(400)) // true
console.log(isLeapYear(2023)) // false
console.log(isLeapYear2(2023)) // false
