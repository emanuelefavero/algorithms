// O(log n)
function binarySearch(array, target) {
  // set left and right pointers
  let left = 0
  let right = array.length - 1

  // while left pointer is less than or equal to right pointer
  while (left <= right) {
    // find middle index by dividing sum of left and right pointers by 2
    let middle = Math.floor((left + right) / 2)

    // if middle element is target, return index
    if (array[middle] === target) {
      return middle
    } else if (array[middle] < target) {
      // if middle element is less than target, move left pointer to right of middle
      left = middle + 1
    } else {
      // if middle element is greater than target, move right pointer to left of middle
      right = middle - 1
    }
  }

  // if target is not found, return -1
  return -1
}

console.log(binarySearch([8, 14, 24, 32], 24)) // 2
console.log(binarySearch([8, 14, 24, 32], 40)) // -1
