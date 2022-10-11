import { INIT_WEATHER_DATA_SET } from "../meta"
import type { DisplayElement, Observer, WeatherDataSet } from "../type"
import WeatherData from "../WeatherData"

type WeatherDiff = Record<keyof WeatherDataSet, string>
const DIFF = 5

// 기상 예보 표시
export default class ForecastDisplay implements Observer, DisplayElement {
	weatherDataSet: WeatherDataSet
	weatherData: WeatherData
	weatherDiff: WeatherDiff

	constructor(weatherData: WeatherData) {
		this.weatherDataSet = INIT_WEATHER_DATA_SET
		this.weatherData = weatherData
		this.weatherDiff = {
			temperature: "",
			humidity: "",
			pressure: "",
		}
		weatherData.registerObserver(this)
	}

	update(updateData: WeatherDataSet): void {
		this.analysis(updateData)
		this.display()
		this.weatherDataSet = updateData
	}

	display(): void {
		const { temperature, humidity, pressure } = this.weatherDiff
		console.log(`온도는 ${temperature}, 습도는 ${humidity}, 기압은 ${pressure}`)
	}

	analysis(updatedWeather: WeatherDataSet): void {
		const beforeWeather = this.weatherDataSet
		const weatherDiff: WeatherDiff = {
			temperature: "",
			humidity: "",
			pressure: "",
		}

		Object.entries(updatedWeather).forEach(([element, updatedValue]) => {
			const diff = beforeWeather[element] - updatedValue
			let expectComment = ""

			if (diff > DIFF) {
				expectComment = "낮아집니다."
			} else if (diff < -DIFF) {
				expectComment = "높아집니다."
			} else {
				expectComment = "비슷합니다."
			}

			weatherDiff[element] = expectComment
		}, {})

		this.weatherDiff = weatherDiff
	}
}
