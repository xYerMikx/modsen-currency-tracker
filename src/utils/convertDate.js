export const convertDate = (dateStr) => {
	const date = new Date(dateStr)

	let hours = date.getHours()
	const day = String(date.getDate()).padStart(2, "0")
	const month = String(date.getMonth() + 1).padStart(2, "0")
	const minutes = String(date.getMinutes()).padStart(2, "0")

	const period = hours < 12 ? "AM" : "PM"
	hours %= 12
	if (hours === 0) hours = 12

	return `${day}.${month} ${hours}:${minutes} ${period}`
}
