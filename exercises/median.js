// O(1)

// TIP: The median is the middle number in a SORTED list of numbers
function median(array) {
  // find the middle number
  let middle = Math.floor(array.length / 2)

  // if array has even amount of numbers
  if (array.length % 2 === 0)
    //  return the average of the middle two numbers
    return (array[middle - 1] + array[middle]) / 2

  // return the middle number
  return array[middle]
}

console.log(median([1, 5, 8])) // 5
console.log(median([1, 4, 8, 10])) // 6 - Why? 4 + 8 = 12, 12 / 2 = 6
