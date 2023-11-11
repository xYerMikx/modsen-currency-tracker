export const getRandomValue = (num) => {
  if (num) {
    const adjustment = Math.random() * 0.5 - 0.25
    return (num + adjustment + 0.1).toFixed(3)
  }
  return (Math.random() + 0.5).toFixed(3)
}
