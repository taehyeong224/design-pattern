import { Espresso } from "./Espresso";
import { DarkRoast } from "./DarkRoast";
import { Mocha } from "./Mocha";
import { Whip } from "./Whip";
import { Beverage } from "./Beverage";
import { HouseBlend } from "./HouseBlend";
import { Play } from "../Play";

export class CoffeeStore extends Play {
	public main() {
        const beverage: Beverage = new Espresso();
        console.log(beverage.getDescription() + " cost : " + beverage.cost());

        let beverage1: Beverage = new DarkRoast();
        beverage1 = new Mocha(beverage1);
        beverage1 = new Mocha(beverage1);
        beverage1 = new Whip(beverage1);

        console.log(beverage1.getDescription()+ " cost : "+beverage1.cost());

		

		let beverage2: Beverage = new HouseBlend();
		beverage2 = new Mocha(beverage2);
		beverage2 = new Whip(beverage2);

        console.log(beverage2.getDescription() + " cost : " + beverage2.cost());
	}
 } 
