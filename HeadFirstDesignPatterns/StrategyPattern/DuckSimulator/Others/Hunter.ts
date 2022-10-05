import { QuackBehavior } from "../Behaviors"

// Duck 클래스를 상속받지 않고, 오리 소리를 흉내내기
class Hunter {
	imitateQuack: QuackBehavior

	performImitateQuack() {
		this.imitateQuack.quack()
	}
}

export default Hunter
