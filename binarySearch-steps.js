// O(log n) - logarithmic

function binarySearch(n, target) {
  let steps = 0

  let start = 0
  let end = n.length - 1

  while (start <= end) {
    steps++
    let mid = Math.floor((start + end) / 2)

    if (target === n[mid])
      return `target ${target} index ${mid} steps ${steps} items: ${n.length}`
    else if (target > n[mid]) start = mid + 1
    else if (target < n[mid]) end = mid - 1
  }

  return -1
}

let n = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
]

console.log(binarySearch(n, 1))
console.log(binarySearch(n, 32))
console.log(binarySearch(n, 50))
console.log(binarySearch(n, 62))
console.log(binarySearch(n, 100))
