// O(n log n) time complexity
// O(n log n) - quasilinear

function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array
  }

  let middle = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, middle))
  let right = mergeSort(array.slice(middle))

  return merge(left, right)
}

function merge(left: number[], right: number[]) {
  let sorted: number[] = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // The ! tells typescript that the value will not be null or undefined
      sorted.push(left.shift()!)
    } else {
      // shift() removes the first element and returns it
      sorted.push(right.shift()!)
    }
  }

  return [...sorted, ...left, ...right]
}

console.log(mergeSort([5, 3, 4, 2, 1])) // [1, 2, 3, 4, 5]
