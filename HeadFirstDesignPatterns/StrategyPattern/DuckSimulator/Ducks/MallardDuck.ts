import Duck from "."
import { FlyWithWings } from "../Behaviors/FlyBehavior"
import { Quack } from "../Behaviors/QuackBehavior"

export default class MallardDuck extends Duck {
	constructor() {
		super()
		this.quackBehavior = new Quack()
		this.flyBehavior = new FlyWithWings()
	}
}
