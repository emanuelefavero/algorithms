function binarySearchRecursive(array, target, start, end) {
  if (start > end) return false

  let mid = Math.floor((start + end) / 2)

  if (array[mid] === target) return true
  else if (array[mid] < target)
    return binarySearchRecursive(array, target, mid + 1, end)
  else return binarySearchRecursive(array, target, start, mid - 1)
}

let array = [1, 2, 3, 4, 5]
let target = 4
let start = 0
let end = array.length - 1

console.log(binarySearchRecursive(array, target, start, end)) // true
console.log(binarySearchRecursive(array, 6, start, end)) // false
