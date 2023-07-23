// Accept an array of numbers and return the greatest sum that could be computed from any "sub-section" of the array

// O(n)
function largestSubSectionSum(array) {
  let currentSum = 0
  let greatestSum = 0

  array.forEach((number) => {
    // If currentSum is negative, we reset it to 0
    if (currentSum + number < 0) {
      currentSum = 0
    } else {
      currentSum += number

      // Greedily assume the current sum is the greatest sum if it's the greatest sum we've seen so far
      if (currentSum > greatestSum) greatestSum = currentSum
    }
  })

  return greatestSum
}

console.log(largestSubSectionSum([3, -4, 4, -3, 5, -9])) // 6, because [4, -3, 5] is the greatest sum
