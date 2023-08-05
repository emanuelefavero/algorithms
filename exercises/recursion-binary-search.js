function binarySearch(array, target, left = 0, right = array.length - 1) {
  if (left > right) return -1

  let middle = Math.floor((left + right) / 2)

  if (array[middle] === target) {
    return middle
  } else if (array[middle] < target) {
    return binarySearch(array, target, middle + 1, right)
  } else {
    return binarySearch(array, target, left, middle - 1)
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)) // 3, target found at index 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1, target not found
