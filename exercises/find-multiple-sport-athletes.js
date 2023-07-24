// Create a function that takes two arrays of objects as an input (with athletes name, last name and team data) and returns an array with full names of the athletes that play multiple sports

let basketballPlayers = [
  {
    firstName: 'Julius',
    lastName: 'Peppers',
    team: 'University of North Carolina',
  },
  {
    firstName: 'Michael',
    lastName: 'Jordan',
    team: 'Chicago Bulls',
  },
  {
    firstName: 'Nate',
    lastName: 'Robinson',
    team: 'Chicago Bulls',
  },
]

let footballPlayers = [
  {
    firstName: 'Julius',
    lastName: 'Peppers',
    team: 'Carolina Panthers',
  },
  {
    firstName: 'Nate',
    lastName: 'Robinson',
    team: 'University of Washington',
  },
]

// O(n + m)
function findMultiSportAthletes(basketballPlayers, footballPlayers) {
  let basketballPlayersHashTable = {}
  let result = []

  // Populate the hash table with the full names of the basketball players
  for (let i = 0; i < basketballPlayers.length; i++) {
    let fullName = `${basketballPlayers[i].firstName} ${basketballPlayers[i].lastName}`

    basketballPlayersHashTable[fullName] = true
  }

  // Iterate over the football players and check if their full name is in the hash table
  for (let i = 0; i < footballPlayers.length; i++) {
    let fullName = `${footballPlayers[i].firstName} ${footballPlayers[i].lastName}`

    // If the full name is in the hash table, add it to the result array
    if (basketballPlayersHashTable[fullName]) {
      result.push(fullName)
    }
  }

  return result
}

console.log(findMultiSportAthletes(basketballPlayers, footballPlayers))
