import DuckSimulator from "./DuckSimulator"
import Duck, { DUCKS, MallardDuck, ModelDuck, RubberDuck } from "./Ducks"

let duck: Duck | null
const duckName = process.argv[2] || ""
switch (duckName) {
	case DUCKS.ModelDuck:
		duck = new ModelDuck()
		break
	case DUCKS.RubberDuck:
		duck = new RubberDuck()
		break
	case DUCKS.MallardDuck:
		duck = new MallardDuck()
		break
	default:
		duck = null
		console.log(`${duckName}은 없어유`)
}

if (!!duck) {
	new DuckSimulator(duck, duckName).play()
}
