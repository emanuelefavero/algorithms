// Eliminate half the resumes until there is only one left
// ALternate between eliminating the top half and the bottom half
// O(log n) - logarithmic
function pickResume(resumes) {
  let eliminate = 'top'

  while (resumes.length > 1) {
    if (eliminate === 'top') {
      resumes = resumes.slice(0, Math.floor(resumes.length / 2))
      eliminate = 'bottom'
    } else if (eliminate === 'bottom') {
      resumes = resumes.slice(Math.floor(resumes.length / 2), resumes.length)
      eliminate = 'top'
    }
  }

  return resumes[0]
}

console.log(pickResume(['john', 'jack', 'kate', 'james', 'hugo'])) // jack

// TIP: If you want to randomize the eliminate variable you can use this line:
// let eliminate = Math.random() < 0.5 ? 'top' : 'bottom'
