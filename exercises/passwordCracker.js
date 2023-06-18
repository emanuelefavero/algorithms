// Generates all possible passwords of length n using a brute force approach.
// The passwords are constructed by combining all the characters from the 'abcdefghijklmnopqrstuvwxyz' string

// O(2^n) - exponential time complexity

/*
TIP:
O(2^n) is one of the worst time complexities
O(2^n) is the opposite of O(log n) (like binary search)
With O(2^n), every time you add one element to the input, the number of operations doubles
*/

function everyPassword(n) {
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const combinations = characters.length ** n
  // TIP: The ** is the exponentiation operator - it raises the left operand to the power of the right operand

  for (let i = 0; i < combinations; i++) {
    let password = ''

    let temp = i
    for (let j = 0; j < n; j++) {
      password +=
        characters[
          Math.floor(temp / characters.length ** j) % characters.length
        ]
      temp = Math.floor(temp / characters.length)
    }

    // OUTPUT
    console.log(password)
  }
}

everyPassword(3) // aaa, baa, caa, ..., yza, zza
