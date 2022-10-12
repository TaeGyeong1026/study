import { INIT_WEATHER_DATA_SET } from "../meta"
import type { DisplayElement, Observer, WeatherDataSet } from "../type"
import WeatherData from "../WeatherData"
import { celsiusToFahrenheit, fahrenheitToCelsius, getHeatIndex } from "../util"

// 측정값을 화면에 표시
export default class HeatIndexDisplay implements Observer, DisplayElement {
	weatherDataSet: WeatherDataSet
	weatherData: WeatherData

	constructor(weatherData: WeatherData) {
		this.weatherDataSet = INIT_WEATHER_DATA_SET
		this.weatherData = weatherData
		weatherData.registerObserver(this)
	}

	// update(updateData: WeatherDataSet): void {
	update(): void {
		const updateData = this.weatherData.getWeatherDataSet()
		this.weatherDataSet = updateData
		this.display()
	}
	display(): void {
		const { temperature, humidity } = this.weatherDataSet

		const tempF = celsiusToFahrenheit(temperature)
		const heatIndex = getHeatIndex(tempF, humidity)
		const convertedTemp = fahrenheitToCelsius(heatIndex)

		console.log(`체감온도: ${convertedTemp}`)
	}
}
