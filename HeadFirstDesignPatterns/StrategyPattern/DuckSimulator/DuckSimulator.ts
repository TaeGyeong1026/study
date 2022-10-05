import Duck, { DUCKS } from "./Ducks"

export default class DuckSimulator {
	duck: Duck
	name: string

	constructor(duck: Duck, name: string) {
		this.duck = duck
		this.name = name
	}

	play() {
		this.duck.display(this.name)
		this.duck.performQuack()
		this.duck.performFly()
		this.duck.swim()
	}
}
