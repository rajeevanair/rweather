// http://api.weatherapi.com/v1/current.json?key=bf6abefcb90647daa11170906220512&q=London&aqi=no

let place = 'Mumbai'

const fetchWeather = async(y) => {
	let url = `http://api.weatherapi.com/v1/current.json?key=bf6abefcb90647daa11170906220512&q=${y}&aqi=no`

	const res = await fetch(url)
	const data = await res.json()

	console.log(y)


}

fetchWeather(place)

