// O(n^2)
function printPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // Print all pairs except if the pair is the same element
      if (i !== j) console.log(array[i], array[j])
    }
  }
}

let array = [1, 2, 3]
printPairs(array)
/*
1 2
1 3
2 1
2 3
3 1
3 2
*/
