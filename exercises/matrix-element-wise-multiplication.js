// Multiply two matrices (element-wise multiplication)

// TIP: Element wise multiplication means multiplying corresponding elements of two matrices of the same dimensions. e.g. the first element of the first matrix is multiplied by the first element of the second matrix, and so on.

function elementWise(a, b) {
  const rows = a.length
  const cols = a[0].length

  if (rows !== b.length || cols !== b[0].length) {
    throw new Error('Matrices must have the same dimensions')
  }

  const result = new Array(rows).fill(0).map(() => new Array(cols).fill(0))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = a[i][j] * b[i][j]
    }
  }

  return result
}

let a = [
  [1, 2],
  [3, 4],
]

let b = [
  [1, 2],
  [3, 10],
]

console.log(elementWise(a, b)) // [[1, 4], [9, 40]]
/* Explanation:
1 * 1 = 1,
2 * 2 = 4,
3 * 3 = 9,
4 * 10 = 40
*/
