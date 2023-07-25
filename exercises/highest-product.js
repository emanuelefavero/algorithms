// Create a function that finds the highest product of any two numbers in an array
// NOTE: The array could have negative numbers. When you multiply a negative number with another negative number, you get a positive number
// O(n)
function highestProduct(array) {
  // Assign highest and second highest to -Infinity so that any number will be greater than them. Do the opposite for lowest and second lowest
  let highest = -Infinity
  let secondHighest = -Infinity
  let lowest = Infinity
  let secondLowest = Infinity

  // Iterate over the array and update the highest, second highest, lowest, and second lowest numbers
  for (let i = 0; i < array.length; i++) {
    let number = array[i]

    if (number > highest) {
      secondHighest = highest
      highest = number
    } else if (number > secondHighest) {
      secondHighest = number
    }

    if (number < lowest) {
      secondLowest = lowest
      lowest = number
    } else if (number < secondLowest) {
      secondLowest = number
    }
  }

  // Calculate the highest product and the lowest product
  let highestProduct = highest * secondHighest
  let lowestProduct = lowest * secondLowest

  // Return the highest product if it's greater than the lowest product
  if (highestProduct > lowestProduct) {
    return highestProduct
  }

  return lowestProduct
}

console.log(highestProduct([-10, 2, 3, -5])) // 50, (-10 * -5)
console.log(highestProduct([-2, 2, 3, -1])) // 6, (2 * 3)
