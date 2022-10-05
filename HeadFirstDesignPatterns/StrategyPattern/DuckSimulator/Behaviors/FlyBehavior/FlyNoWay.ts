import FlyBehavior from "."

export default class FlyNoWay implements FlyBehavior {
	fly() {
		console.log("날지못해슬픈짐승")
	}
}

