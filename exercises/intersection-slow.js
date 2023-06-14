// Intersection between two arrays (NON unique) - return an array with all the values that occur in both of the arrays
// Worst O(n^2) - Average O(n or n^2) - Best O(n)

function intersection(array1, array2) {
  let output = []

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        output.push(array1[i])
        break
      }
    }
  }

  return output
}

console.log(intersection([4, 2, 5, 3], [4, 1, 3, 6])) // [4, 3]
console.log(intersection([4, 4, 4, 3], [4, 4, 4, 6])) // [4, 4, 4]
