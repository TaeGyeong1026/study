import { FlyBehavior, QuackBehavior } from "../Behaviors"

export default abstract class Duck {
	quackBehavior!: QuackBehavior
	flyBehavior!: FlyBehavior

	// 기본 행동
	performQuack() {
		this.quackBehavior.quack()
	}
	performFly() {
		this.flyBehavior.fly()
	}
	swim() {
		console.log("모든 오리는 헤엄을 칠 수 있습니다~!")
	}
	display(name: string) {
		console.log(`내 이름은 ${name}`)
	}
}

export enum DUCKS {
	MallardDuck = "MallardDuck",
	ModelDuck = "ModelDuck",
	RubberDuck = "RubberDuck",
}

export { default as MallardDuck } from "./MallardDuck"
export { default as ModelDuck } from "./ModelDuck"
export { default as RubberDuck } from "./RubberDuck"
