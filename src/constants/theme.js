const commonTheme = {
  gradientColor:
    "-webkit-linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)",
  orange: "#FF971D",
  inputColor: "#1B2028",
  black: "#000000",
  paddings: {
    xxs: "0.5rem",
    xs: "0.8rem",
    sm: "1rem",
    md: "2rem",
    lg: "3.2rem",
    xl: "5rem",
    xxl: "10rem",
  },
  margins: {
    xxs: "0.8rem",
    xs: "1rem",
    sm: "2rem",
    md: "3rem",
    xmd: "4rem",
    xxmd: "5rem",
    lg: "6rem",
    xl: "10rem",
    xxl: "12rem",
  },
  zIndex: {
    lowest: -1,
    one: 1,
    two: 2,
  },
  fontSize: {
    sm: "2rem",
    md: "2.4rem",
    lg: "3.2rem",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
  },
  borderRadius: "0.8rem",
}
export const darkTheme = {
  ...commonTheme,
  primaryColor: "#ffffff",
  secondaryColor: "#d9d9d9",
  darkColor: "#898989",
  lightGray: "#A7B2C3",
  bgColor: "#030304",
  cardBgColor: "#202025",
  borderColor: "#474747",
  backgroundGradient:
    "linear-gradient(253deg, #121212 11.2%, rgba(36, 121, 64, 0.2) 92%)",
  currentTheme: "dark",
}
export const lightTheme = {
  ...commonTheme,
  primaryColor: "#000000",
  secondaryColor: "#010101",
  darkColor: "#898989",
  bgColor: "#ffffff",
  cardBgColor: "#eeeeee",
  borderColor: "#d8d8d8",
  backgroundGradient:
    "linear-gradient(253deg, #ffffff 11.2%, rgba(36, 121, 64, 0.2) 92%)",
  currentTheme: "light",
}
