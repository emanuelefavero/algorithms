// * Multiply two matrices (rows by columns multiplication)

// TIP: Matrix multiplication involves taking the dot product of rows from the first matrix with columns from the second matrix. The number of columns in the first matrix must match the number of rows in the second matrix.

function multiply(a, b) {
  const rowsA = a.length
  const colsA = a[0].length
  const rowsB = b.length
  const colsB = b[0].length

  if (colsA !== rowsB) {
    throw new Error('Incompatible matrix dimensions')
  }

  const result = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0))

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += a[i][k] * b[k][j]
      }
    }
  }

  return result
}

let a = [
  [1, 2],
  [3, 4],
]

let b = [
  [10, 20],
  [30, 40],
]

console.log(multiply(a, b)) // [[70, 100], [150, 220]]
/* Explanation:
1 * 10 + 2 * 30 = 10 + 60 = 70
3 * 10 + 4 * 30 = 30 + 120 = 150
1 * 20 + 2 * 40 = 20 + 80 = 100
3 * 20 + 4 * 40 = 60 + 160 = 220
*/
