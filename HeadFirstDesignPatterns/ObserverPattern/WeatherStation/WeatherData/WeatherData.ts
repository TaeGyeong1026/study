import { INIT_WEATHER_DATA_SET } from "../meta"
import type { Observer, Subject, WeatherDataSet } from "../type"

export default class WeatherData implements Subject {
	observers: Observer[]
	weatherDataSet: WeatherDataSet

	constructor() {
		this.observers = []
		this.weatherDataSet = INIT_WEATHER_DATA_SET
	}

	registerObserver(observer: Observer): void {
		this.observers.push(observer);
	}
	removeObserver(observer: Observer): void {}
	notifyObserver(): void {
		this.observers.forEach((ob) => {
			ob.update(this.weatherDataSet)
		})
	}

	measurementsChanged() {
		this.notifyObserver()
	}
	setMeasurements(updatedMeasurements: WeatherDataSet) {
		this.weatherDataSet = updatedMeasurements
		this.measurementsChanged()
	}
}
