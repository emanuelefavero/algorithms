// Create a function that returns a new array of objects with book title and author name from two input arrays: authors and books.

let authors = [
  { authorId: 1, name: 'J.K. Rowling' },
  { authorId: 2, name: 'J.R.R. Tolkien' },
  { authorId: 3, name: 'Stephen King' },
  { authorId: 4, name: 'Anne Rice' },
]

let books = [
  { authorId: 1, title: 'Harry Potter' },
  { authorId: 1, title: 'Fantastic Beasts and Where to Find Them' },
  { authorId: 2, title: 'The Lord of the Rings' },
  { authorId: 3, title: 'The Shining' },
  { authorId: 4, title: 'Interview with the Vampire' },
]

// O(n + m), where n is the length of authors and m is the length of books
function connectBooksToAuthors(authors, books) {
  // USE A HASH TABLE TO STORE THE AUTHOR NAMES FOR O(1) LOOKUP
  let authorHashTable = {}

  authors.forEach((author) => {
    authorHashTable[author.authorId] = author.name
  })

  let result = []

  books.forEach((book) => {
    result.push({
      title: book.title,
      author: authorHashTable[book.authorId], // O(1) LOOKUP
    })
  })

  return result
}

// ---------------------

console.log(connectBooksToAuthors(authors, books))
/*
[
  { title: 'Harry Potter', author: 'J.K. Rowling' },
  {
    title: 'Fantastic Beasts and Where to Find Them',
    author: 'J.K. Rowling'
  },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { title: 'The Shining', author: 'Stephen King' },
  { title: 'Interview with the Vampire', author: 'Anne Rice' }
]
*/
