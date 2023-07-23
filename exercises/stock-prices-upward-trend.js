// Accept an array of stock prices and determine whether there are any "three" prices that create an upward trend (each one greater than the previous one)
// Return true if there are three prices that create an upward trend, otherwise return false
function stockPricesUpwardTrend(array) {
  let lowestPrice = array[0]
  let middlePrice = Infinity

  for (let i = 1; i < array.length; i++) {
    if (array[i] < lowestPrice) {
      lowestPrice = array[i]

      // If current price is higher than lowest price but lower than middle price, set middle price to current price
    } else if (array[i] < middlePrice) {
      middlePrice = array[i]
    } else if (array[i] > middlePrice) {
      return true
    }
  }

  return false
}

console.log(stockPricesUpwardTrend([5, 2, 8, 9])) // true
console.log(stockPricesUpwardTrend([10, 1, 2])) // false
