// O(log n)

// Compound interest is when you earn interest on both the money you've saved and the interest you earn
// TIP: Imagine you put $ 100 in a savings account with a yearly interest rate of 6 % . After one year, you have 100 + 6 = $ 106 . After two years, if the interest is simple , you will have 106 + 6 = $ 112 (adding 6 % of the original principal amount each year.)

// We will use the concept of grains of salt in a chess board
function getChessboardSpaces(numberOfGrains) {
  let chessboardSpaces = 1
  let placedGrains = 1

  while (placedGrains < numberOfGrains) {
    placedGrains *= 2 // e.g. 5 *= 2 outputs 10
    chessboardSpaces += 1
  }

  return chessboardSpaces
}

console.log(getChessboardSpaces(2)) // 2
console.log(getChessboardSpaces(10)) // 5
console.log(getChessboardSpaces(20)) // 6
console.log(getChessboardSpaces(50)) // 7
console.log(getChessboardSpaces(100)) // 8

// TIP: Similar to binary search in time complexity
