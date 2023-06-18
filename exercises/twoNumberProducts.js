// twoNumberProducts - get the products (result of multiplication) from all the numbers in two arrays
// O(N * M) - n where N is the size of the first array and M is the size of the second array

/* TIP:
O(N * M) lies between O(n) and O(n^2)
If the arrays are similar in size weh are close to O(n^2)
If one arrays is smaller we are close to O(n) since at best it will have 1 number so we only count the size of the first array
*/
function twoNumberProducts(array1, array2) {
  let products = []

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      products.push(array1[i] * array2[j])
    }
  }

  return products
}

console.log(twoNumberProducts([1, 2, 3], [10, 100, 1000]))
// [10, 100, 1000, 20, 200, 2000, 30, 300, 3000]
