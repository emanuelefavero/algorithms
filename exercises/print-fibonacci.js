// O(n)
function printFibonacci(number) {
  if (number === 0 || number === 1) return number

  let a = 0
  let b = 1

  console.log(a)
  console.log(b)

  for (let i = 1; i < number; i++) {
    let temp = a
    a = b
    b = a + temp
    console.log(b)
  }
}

printFibonacci(10) // 0 1 1 2 3 5 8 13 21 34 55
