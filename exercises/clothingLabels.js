// Accept an array of clothing items (strings) and create text for every possible label

// O(n) - O(5n) since the nested loop will always run 5 times
// TIP: Even if this algorithm has nested loops, the time complexity is not O(n^2) since the nested loop will always run 5 times and doesn't grow with the number of inputs

function markInventory(array) {
  let output = []
  let sizes = [1, 2, 3, 4, 5]

  array.forEach((item) => {
    sizes.forEach((size) => {
      output.push(`${item} Size: ${size}`)
    })
  })

  return output
}

console.log(markInventory(['Purple Shirt', 'Green Shirt']))
