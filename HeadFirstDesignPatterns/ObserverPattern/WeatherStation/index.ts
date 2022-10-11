import WeatherStations from "./WeatherStations"

const station = new WeatherStations()
station.update([
	{
		temperature: 15,
		humidity: 55,
		pressure: 1000,
	},
	{
		temperature: 20,
		humidity: 70,
		pressure: 995,
	},
	{
		temperature: 5,
		humidity: 48,
		pressure: 1010,
	},
])
