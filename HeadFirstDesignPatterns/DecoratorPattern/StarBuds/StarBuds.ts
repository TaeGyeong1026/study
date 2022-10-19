import { Espresso, ColdBlended, Beverage } from "./Beverages"
import { Milk, Mocha, Whipping } from "./Codiments"
export class StarBuds {
	showCost(beverage: Beverage) {
		const name = beverage.getName()
		const cost = beverage.cost()
		console.log(`${name}: ${cost}원`)
	}

	getCoffee() {
		let b1 = new Espresso()
		b1 = new Mocha(b1)
		b1 = new Whipping(b1)

		let b2 = new ColdBlended()
		b2 = new Milk(b2)

		this.showCost(b1)
		this.showCost(b2)
	}
}
