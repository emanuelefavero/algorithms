function addUntil100(array) {
  if (array.length === 0) return 0

  // assign recursion to variable to decrease recursive calls overlapping
  let sumOfRemainingNumbers = addUntil100(array.slice(1))

  if (array[0] + sumOfRemainingNumbers > 100) {
    return sumOfRemainingNumbers
  }

  return array[0] + sumOfRemainingNumbers
}

console.log(addUntil100([2, 2, 101]))
// 4, 101 is not considered since is greater than 100

console.log(addUntil100([2, 2, 4])) // 8
