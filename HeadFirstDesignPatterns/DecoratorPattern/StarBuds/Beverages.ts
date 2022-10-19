export type Size = "S" | "M" | "L"
export abstract class Beverage {
	name: string
	_size: Size

	getName() {
		return this.name
	}
	cost(): number {
		return 0
	}

	get size() {
		return this._size
	}
	set setSize(size: Size) {
		this._size = size
	}
}

export class Espresso extends Beverage {
	constructor() {
		super()
		this.name = "Espresso"
	}

	cost() {
		return 3000
	}
}

export class ColdBlended extends Beverage {
	constructor() {
		super()
		this.name = "ColdBlended"
	}

	cost() {
		return 2500
	}
}
