// http://api.weatherapi.com/v1/current.json?key=bf6abefcb90647daa11170906220512&q=London&aqi=no


const tempF = document.querySelector(".temperature")
const search_field = document.querySelector(".enter_city")
const form = document.querySelector('form')

form.addEventListener('submit', searchForm)

const fetchWeather = async(y) => {
	let url = `http://api.weatherapi.com/v1/current.json?key=bf6abefcb90647daa11170906220512&q=${y}&aqi=no`

	const res = await fetch(url)
	const data = await res.json()

	// console.log(data)
	let temp = data.current.temp_c
	let condition = data.current.condition.text
	let dt = data.location.localtime

	console.log(temp + " C")
	console.log(condition)
	console.log(dt)


}

function searchForm(e){

	e.preventDefault()
	target = search_field.value
	fetchWeather(target)
}


