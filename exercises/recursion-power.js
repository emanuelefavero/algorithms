// O(b)
function power2(a, b) {
  if (b === 0) return 1

  return a * power2(a, b - 1)
}

console.log(power2(2, 3)) // 8, (2 * 2 * 2)
