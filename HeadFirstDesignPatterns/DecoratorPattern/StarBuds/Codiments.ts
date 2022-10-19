import { Beverage } from "./Beverages"

abstract class Codiment extends Beverage {
	beverage: Beverage
	abstract getName(): string
}

export class Mocha extends Codiment {
	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}

	getName() {
		return this.beverage.getName() + ", Mocha"
	}

	cost() {
		return this.beverage.cost() + 500
	}
}

export class Milk extends Codiment {
	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}

	getName() {
		return this.beverage.getName() + ", Milk"
	}

	cost() {
		return this.beverage.cost() + 400
	}
}

export class Whipping extends Codiment {
	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}

	getName() {
		return this.beverage.getName() + ", Whipping"
	}

	cost() {
		return this.beverage.cost() + 300
	}
}
