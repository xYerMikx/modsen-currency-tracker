const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = `(max-width: ${sizes[label]}px)`
  return acc
}, {})
