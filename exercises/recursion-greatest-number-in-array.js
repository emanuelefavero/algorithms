// O(n)
function max(array) {
  if (array.length === 1) return array[0]

  // by calling the recursive function only once in code we vastly reduced the recursive calls and increased the efficiency of the algorithm by a lot
  const maxNumber = max(array.slice(1))

  if (array[0] > maxNumber) return array[0]
  else return maxNumber
}

console.log(max([1, 2, 3, 4])) // 4
console.log(max([20, 40, 30])) // 40
console.log(max([50, 10])) // 50
