const commonTheme = {
	gradientColor:
		"-webkit-linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)",
	orange: "#FF971D",
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
