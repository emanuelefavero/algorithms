// Create a function that finds the missing number in an array of integers
// example input: [0, 1, 3, 4, 5]

// TIP: We can find the missing number by simply finding the sum of all the numbers up until the length of the array, then finding the sum all all the numbers in the array and then subtracting the two

// O(n)
function findMissingNumber(array) {
  let realSum = 0
  let arraySum = 0

  for (let i = 0; i <= array.length; i++) {
    realSum += i
  }

  for (let i = 0; i < array.length; i++) {
    arraySum += array[i]
  }

  return realSum - arraySum
}

console.log(findMissingNumber([0, 1, 3, 4, 5])) // 2
