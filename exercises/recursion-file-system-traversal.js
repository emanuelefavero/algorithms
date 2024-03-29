// Prints all the subdirectories names starting from a given directory path
// TIP: Recursion is perfect for task where you don't know how many sub layers there are

const fs = require('fs')
const path = require('path')

function printSubdirectories(directory) {
  fs.readdir(directory, { withFileTypes: true }, (error, files) => {
    files.forEach((file) => {
      const filePath = path.join(directory, file.name)

      if (file.isDirectory() && !file.name.startsWith('.')) {
        console.log(file.name)

        // Recursion
        printSubdirectories(filePath)
      }
    })
  })
}

printSubdirectories('.') // prints all the subdirectories from the current directory

// TIP: Try passing a directory path such as '/Users/ef/Downloads'
