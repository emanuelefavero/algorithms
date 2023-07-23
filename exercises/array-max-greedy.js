// Find the greatest number in an array
// TIP: The greedy algorithm is a problem-solving approach where at each step, you make the best possible choice based on the current information, without considering the consequences of that choice on future steps

// O(n)
function max(array) {
  let max = array[0] // greedy approach, we assume the first number is the greatest

  array.forEach((number) => {
    if (number > max) max = number
  })

  return max
}

console.log(max([1, 5, 2, 3])) // 5
