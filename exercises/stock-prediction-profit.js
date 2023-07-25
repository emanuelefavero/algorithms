// Write a function that calculates the greatest profit that could be made from a single "buy" transaction followed by a single "sell" transaction
// The input array will represent the prediction for next week prices
// Example: [10, 7, 5, 8, 11, 2, 6], in this array of prices the max profit would be 6 since the best day to buy is the 5 and the best day to sell after is the 11

// O(n)
function maxProfit(array) {
  let buyPrice = array[0]
  let profit = 0

  for (let i = 0; i < array.length; i++) {
    let price = array[i]

    if (price < buyPrice) {
      buyPrice = price

      // Update the profit ONLY if the current profit is greater than the previous profit
    } else if (price - buyPrice > profit) {
      profit = price - buyPrice
    }
  }

  return profit
}

console.log(maxProfit([10, 7, 5, 8, 11, 2, 6])) // 6, buy at 5 and sell at 11
console.log(maxProfit([10, 7, 5, 8, 11, 20, 6])) // 15, buy at 5 and sell at 20
