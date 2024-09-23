// A binary search algorithm that finds a number between a min and max value

// O(log n) logarithmic
function binarySearch(target, min = 1, max = 100) {
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    console.log(middle)

    if (middle === target) return { found: middle }
    else if (middle < target) min = middle + 1
    else max = middle - 1
  }

  return -1
}

console.log(binarySearch(76)) // 50 75 88 81 78 76
