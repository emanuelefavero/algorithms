// The coin game - two players take turns removing 1, 2, or 3 coins from a pile of coins. The player who removes the last coin wins. Write a function that returns the winner of the game given the number of coins in the pile.

// TIP: Recognize patterns. To do so, take a whole bunch of example inputs, calculate their respective outputs and see if you can detect a pattern

// Number of Coins | Winner
// 1               | them
// 2               | you
// 3               | you
// 4               | them
// 5               | you
// 6               | you
// 7               | them
// 8               | you
// 9               | you
// 10              | them

// TIP: As you can see from the table above, starting with coin 1, every third number gives victory to the opponent. So, if the number of coins is a multiple of 3, the opponent wins. Otherwise, you win

function gameWinner(numberOfCoins) {
  if ((numberOfCoins - 1) % 3 === 0) return 'them'

  return 'you'
}
