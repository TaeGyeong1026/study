import { INIT_WEATHER_DATA_SET } from "../meta"
import type { DisplayElement, Observer, WeatherDataSet } from "../type"
import WeatherData from "../WeatherData"

// 측정치 통계 표시
export default class StatisticsDisplay implements Observer, DisplayElement {
	weatherDataSet: WeatherDataSet
	weatherData: WeatherData
	weatherStatistic: {
		avg: number
		max: number
		min: number
	}

	constructor(weatherData: WeatherData) {
		this.weatherDataSet = INIT_WEATHER_DATA_SET
		this.weatherStatistic = {
			avg: 0,
			max: -Infinity,
			min: Infinity,
		}
		this.weatherData = weatherData
		weatherData.registerObserver(this)
	}

	update(updateData: WeatherDataSet): void {
		this.analysis(updateData)
		this.display()
		this.weatherDataSet = updateData
	}
	display(): void {
		const { avg, max, min } = this.weatherStatistic
		console.log(`평균: ${avg}"C, 최고: ${max}"C, 최저: ${min}"C`)
	}
	analysis(updatedWeather: WeatherDataSet): void {
		const beforeWeather = this.weatherStatistic

		const max = Math.max(updatedWeather.temperature, beforeWeather.max)
		const min = Math.min(updatedWeather.temperature, beforeWeather.min)

		this.weatherStatistic = {
			avg: (max + min) / 2,
			max,
			min,
		}
	}
}
