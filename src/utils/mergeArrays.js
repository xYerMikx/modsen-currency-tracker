export const mergeArrays = (array1, array2) => {
  return array1.map((item, index) => {
    return { ...item, ...array2[index] }
  })
}
