// Find the shortest path between two people in a social network
class Graph {
  constructor() {
    this.adjacencyList = new Map()
  }

  addVertex(person) {
    this.adjacencyList.set(person, [])
  }

  addEdge(person1, person2) {
    this.adjacencyList.get(person1).push(person2)
    this.adjacencyList.get(person2).push(person1)
  }

  // * Breadth-first search
  findShortestPath(startPerson, endPerson) {
    const visited = new Set()
    const queue = [[startPerson]]

    while (queue.length) {
      const path = queue.shift() // Remove the first element from the queue
      const currentPerson = path[path.length - 1] // Get the last element from the path

      if (currentPerson === endPerson) return path

      // If the current person hasn't been visited
      if (!visited.has(currentPerson)) {
        visited.add(currentPerson)

        const neighbors = this.adjacencyList.get(currentPerson)

        // For each neighbor
        for (const neighbor of neighbors) {
          // If the neighbor hasn't been visited
          if (!visited.has(neighbor)) {
            // Create a new path with the neighbor
            const newPath = [...path, neighbor]
            queue.push(newPath)
          }
        }
      }
    }

    // If no path is found
    return []
  }
}

const socialNetwork = new Graph()

// Add people
socialNetwork.addVertex('Alice')
socialNetwork.addVertex('Bob')
socialNetwork.addVertex('Cindy')
socialNetwork.addVertex('Doug')

// Add connections
socialNetwork.addEdge('Alice', 'Bob')
socialNetwork.addEdge('Alice', 'Cindy')
socialNetwork.addEdge('Bob', 'Doug')

const shortestPath = socialNetwork.findShortestPath('Alice', 'Doug')
console.log(shortestPath) // [ 'Alice', 'Bob', 'Doug' ]
