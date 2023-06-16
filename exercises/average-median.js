// * Median - The median is the middle number that appear in a sorted data set
// TIP: IF the dataset has odd elements, the median is the middle number
// If the dataset has even numbers, the median is the average between the two middle numbers

function median(array) {
  // If array length is 0
  if (!array.length) return false

  // If array length is 1
  if (array.length <= 1) return array[0]

  // If array length is even
  if (array.length % 2 === 0) {
    let middleNumberLeft = array[array.length / 2 - 1]
    let middleNumberRight = array[array.length / 2]
    let middleAverage = Number(
      ((middleNumberLeft + middleNumberRight) / 2).toFixed(1)
    )
    return middleAverage
  }

  // If array length is odd
  return array[Math.floor(array.length / 2)]
}

console.log(median([])) // false
console.log(median([1])) // 1
console.log(median([1, 2, 3, 4, 5])) // 3
console.log(median([1, 2, 3, 4])) // 2.5
console.log(median([1, 4, 6, 9])) // 5
