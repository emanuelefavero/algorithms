// O(n) - this first implementation will take the same number of steps as the input (upperLimit)
function printNumbers1(upperLimit) {
  let steps = 0
  number = 2

  while (number <= upperLimit) {
    steps++
    if (number % 2 === 0) {
      console.log(number)
    }

    number++
  }

  console.log('steps:', steps)
}

// O(n / 2) - this implementation will take half the steps of the input (upperLimit). But in Big O Notation we will still reference to this function as having O(n) linear time complexity
// TIP: OF course when comparing two algorithm in the same time complexity is useful to go into the details and determine which one is faster
function printNumbers2(upperLimit) {
  let steps = 0
  number = 2

  while (number <= upperLimit) {
    steps++
    console.log(number)

    number += 2
  }

  console.log('steps:', steps)
}

printNumbers1(4)
printNumbers2(4)
