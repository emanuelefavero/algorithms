function findMiddle(array) {
  let tortoise = 0
  let hare = 0

  while (hare < array.length) {
    tortoise++
    hare += 2
  }

  return array[tortoise - 1] // -1 because the hare could go over the array length
}

console.log(findMiddle([30, 20, 40, 10, 50])) // 40
console.log(findMiddle([30, 20, 40, 10])) // 20
