import { QuackBehavior } from "../Behaviors"

// Duck 클래스를 상속받지 않고, 오리 소리를 흉내내기
export default abstract class Hunter {
	imitateQuack: QuackBehavior

	performImitateQuack() {
		this.imitateQuack.quack()
	}
}
export { default as HunterBang } from "./HunterBang"
