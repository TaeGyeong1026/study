export interface Subject {
	registerObserver(observer: Observer): void
	removeObserver(observer: Observer): void
	notifyObserver(): void
}
export interface Observer {
	update(updateData: WeatherDataSet): void
}
export interface DisplayElement {
	display(): void
}
export type WeatherDataSet = {
	temperature: number
	humidity: number
	pressure: number
}