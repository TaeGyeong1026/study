import Duck from "."
import { FlyNoWay } from "../Behaviors/FlyBehavior"
import { MuteQuack } from "../Behaviors/QuackBehavior"

export default class ModelDuck extends Duck {
	constructor() {
		super()
		this.quackBehavior = new MuteQuack()
		this.flyBehavior = new FlyNoWay()
	}
}
