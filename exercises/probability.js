// Calculate the probability of getting an even number less than 5 when rolling a dice 10 times
// TIP: You just need to count the number of favorable outcomes (even numbers less than 5) and divide it by the total number of possible outcomes (10) to find the probability
// TIP: To convert the probability to a percentage, multiply it by 100
function probability(n) {
  let counter = 0

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i < 5) counter++
  }

  let percentage = (counter / n) * 100

  return percentage + '%'
}

console.log(probability(10)) // 20%
