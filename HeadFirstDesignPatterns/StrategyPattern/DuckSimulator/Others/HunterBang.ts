import Hunter from "."
import { QuackBehavior } from "../Behaviors"

class HunterBang extends Hunter {
	constructor() {
		super()
		this.imitateQuack = new QuackWithToy()
	}
}

class QuackWithToy implements QuackBehavior {
	quack(): void {
		console.log("꽥꽥꽥꽥(장난감임)")
	}
}

export default HunterBang
