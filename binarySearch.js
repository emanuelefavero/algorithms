// O(log n)

function binarySearch(array, target) {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (array[middle] === target) {
      return middle // found, return index
    } else if (array[middle] < target) {
      left = middle + 1
    } else if (array[middle] > target) {
      right = middle - 1
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)) // 3
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
