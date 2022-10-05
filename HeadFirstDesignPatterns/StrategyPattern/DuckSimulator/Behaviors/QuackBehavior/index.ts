export { default as Quack } from "./Quack"
export { default as Squeak } from "./Squeak"
export { default as MuteQuack } from "./MuteQuack"

export default interface QuackBehavior {
	quack(): void
}
