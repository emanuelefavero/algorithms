function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums

  const pivot = nums[Math.floor(nums.length / 2)]
  const left = nums.filter((num) => num < pivot)
  const right = nums.filter((num) => num > pivot)
  const middle = nums.filter((num) => num === pivot)

  return [...quickSort(left), ...middle, ...quickSort(right)]
}

console.log(quickSort([2, 1, 5, 3, 4])) // [1, 2, 3, 4, 5]
