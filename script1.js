// http://api.weatherapi.com/v1/current.json?key=bf6abefcb90647daa11170906220512&q=London&aqi=no

let place = 'Mumbai'

const fetchWeather = async(x) => {
	let url = `http://api.weatherapi.com/v1/current.json?key=bf6abefcb90647daa11170906220512&q=${x}&aqi=no`

	const res = await fetch(url)
	const data = await res.json()

	console.log(data)


}

fetchWeather(place)

