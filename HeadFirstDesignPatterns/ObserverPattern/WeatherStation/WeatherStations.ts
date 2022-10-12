import WeatherData from "./WeatherData"
import {
	CurrentConditionDisplay,
	ForecastDisplay,
	HeatIndexDisplay,
	RemovableDisplay,
	StatisticsDisplay,
} from "./Displays"
import { WeatherDataSet } from "./type"

export default class WeatherStation {
	weatherData: WeatherData

	constructor() {
		this.weatherData = new WeatherData()
	}

	update(updated: WeatherDataSet[]): void {
		const currentConditionDisplay = new CurrentConditionDisplay(
			this.weatherData
		)
		const statisticsDisplay = new StatisticsDisplay(this.weatherData)
		const forecastDisplay = new ForecastDisplay(this.weatherData)
		const removableDisplay = new RemovableDisplay(this.weatherData)
		const heatIndexDisplay = new HeatIndexDisplay(this.weatherData)

		updated.forEach((measurement) => {
			this.weatherData.setMeasurements(measurement)
		})
	}
}
