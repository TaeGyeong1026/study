import Duck from "."
import { FlyNoWay } from "../Behaviors/FlyBehavior"
import { Squeak } from "../Behaviors/QuackBehavior"

export default class RubberDuck extends Duck {
	constructor() {
		super()
		this.quackBehavior = new Squeak()
		this.flyBehavior = new FlyNoWay()
	}
}
