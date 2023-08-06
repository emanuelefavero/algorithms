function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function generatePermutations(str, start, end) {
  if (start === end) {
    console.log(str.join(''))
  } else {
    for (let i = start; i <= end; i++) {
      swap(str, start, i)
      generatePermutations(str, start + 1, end)
      swap(str, start, i) // Backtrack
    }
  }
}

function printAllPermutations(input) {
  const strArray = input.split('')
  const n = strArray.length
  generatePermutations(strArray, 0, n - 1)
}

const inputString = 'abc'
printAllPermutations(inputString)
