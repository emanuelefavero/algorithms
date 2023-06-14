// Intersection between two arrays (unique) - return an array with all the values that occur in both of the arrays
// O(n)

function intersection(array1, array2) {
  let set1 = new Set(array1)

  let output = new Set(array2.filter((element) => set1.has(element)))

  return [...output]
}

console.log(intersection([4, 2, 5, 3], [4, 1, 3, 6])) // [4, 3]
console.log(intersection([4, 4, 4, 3], [4, 4, 4, 6])) // [4]
