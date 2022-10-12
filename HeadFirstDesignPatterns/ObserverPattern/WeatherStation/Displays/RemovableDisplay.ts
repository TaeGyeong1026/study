import { INIT_WEATHER_DATA_SET } from "../meta"
import { DisplayElement, Observer, WeatherDataSet } from "../type"
import WeatherData from "../WeatherData"

export default class RemovableDisplay implements Observer, DisplayElement {
	weatherDataSet: WeatherDataSet
	weatherData: WeatherData

	constructor(weatherData: WeatherData) {
		this.weatherDataSet = INIT_WEATHER_DATA_SET
		this.weatherData = weatherData
		weatherData.registerObserver(this)
	}

	update(): void {
		this.weatherDataSet = this.weatherData.getWeatherDataSet()
		this.display()
		this.weatherData.removeObserver(this)
	}
	display(): void {
		console.log("처음만 나오고, 난 사라지지요")
	}
}
