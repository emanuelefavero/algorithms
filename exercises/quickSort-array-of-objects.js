// O(n^2) - quadratic - worst case
// O(n log n) - quasilinear - average and best case
// (n) space

// * quick sort for array of objects
function quickSort(array) {
  if (array.length <= 1) return array

  let pivot = array[0]
  let left = []
  let right = []

  for (let i = 1; i < array.length; i++) {
    if (array[i].age < pivot.age) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

let arrayOfObjects = [
  {
    name: 'John',
    age: 44,
  },
  {
    name: 'Jack',
    age: 30,
  },
  {
    name: 'Kate',
    age: 20,
  },
]

console.log(quickSort(arrayOfObjects))
/*
[
  { name: 'Kate', age: 20 },
  { name: 'Jack', age: 30 },
  { name: 'John', age: 44 }
]
*/
