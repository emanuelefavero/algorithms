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

// BEWARE: This is the inefficient solution of this problem
// @see ./magical-lookups-books-with-authors.js for an efficient solution
// O(n * m), where n is the length of authors and m is the length of books
function connectBooksToAuthors(authors, books) {
  let result = []

  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.authorId) {
        result.push({
          title: book.title,
          author: author.name,
        })
      }
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
