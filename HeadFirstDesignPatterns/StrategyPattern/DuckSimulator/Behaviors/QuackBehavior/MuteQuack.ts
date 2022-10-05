import QuackBehavior from "."

export default class MuteQuack implements QuackBehavior {
	quack() {
		console.log("무----------음")
	}
}
