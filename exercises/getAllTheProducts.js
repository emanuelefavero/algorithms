// Get all the products by multiplying every number in an array to each other
// TIP: We only need to multiply two numbers once, we don't need to go back
// TIP: The product is the result of when you multiply two or more numbers
// O(n^2 / 2) actual - O(n^2) in Big O

function getAllTheProducts(array) {
  let products = []

  // TIP: Since the inner loop starts from the i position + 1, we need to make sure that the i position doesn't reach the end of the array, causing the inner loop to go out-of-bounds. So we write array.length -1 instead of array.length
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      products.push(array[i] * array[j])
    }
  }

  return products
}

console.log(getAllTheProducts([1, 2, 3, 4, 5])) // [2, 3, 4, 5, 6, 8, 10, 12, 15, 20]
