import { INIT_WEATHER_DATA_SET } from "../meta"
import type { DisplayElement, Observer, WeatherDataSet } from "../type"
import WeatherData from "../WeatherData"

// 측정값을 화면에 표시
export default class CurrentConditionDisplay
	implements Observer, DisplayElement
{
	weatherDataSet: WeatherDataSet
	weatherData: WeatherData

	constructor(weatherData: WeatherData) {
		this.weatherDataSet = INIT_WEATHER_DATA_SET
		this.weatherData = weatherData
		weatherData.registerObserver(this)
	}

	update(updateData: WeatherDataSet): void {
		this.weatherDataSet = updateData
		this.display()
	}
	display(): void {
		const { temperature, humidity, pressure } = this.weatherDataSet
		console.log(`온도: ${temperature}, 습도: ${humidity}, 기압: ${pressure}`)
	}
}
