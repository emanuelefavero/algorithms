// O(n^2)
function printPairs(array) {
  for (let i = 0; i < array.length; i++) {
    // Print all pairs after the current element
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

let array = [1, 2, 3]
printPairs(array)
/*
1 2
1 3
2 3
*/

// TIP: The output never reaches the last element in the array because the inner loop starts at i + 1
