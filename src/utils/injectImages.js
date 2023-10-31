export const injectImages = (currencies, imagesArr) => {
  return currencies.map((el, index) => ({
    ...el,
    imageSrc: imagesArr[index],
  }))
}
