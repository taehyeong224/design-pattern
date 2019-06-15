import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { Dough } from "../interface/Dough";
import { Sauce } from "../interface/Sauce";
import { Cheese } from "../interface/Cheese";
import { ThickCrustDough } from "../stuff/dough/ThickCrustDough";
import { PlumTomatoSauce } from "../stuff/sauce/PlumTomatoSauce";
import { MozzarellaCheese } from "../stuff/cheese/MozzarellaCheese";
import { Veggies } from "../interface/Veggies";
import { BlackOlives } from "../stuff/veggies/BlackOlives";
import { Spinach } from "../stuff/veggies/Spinach";
import { EggPlant } from "../stuff/veggies/EggPlant";
import { Pepperoni } from "../interface/Pepperoni";
import { Clams } from "../interface/Clams";
import { FrozenClam } from "../stuff/clams/FrozenClam";
import { SlicedPepperoni } from "../stuff/pepperoni/SlicedPepperoni";

export class ChicagoPizzaingredientFactory implements PizzaIngredientFactory {
	NY_STYLE: string = "CHICAGO";
	
	public createDough(): Dough {
		return new ThickCrustDough();
	}

	public createSauce(): Sauce {
		return new PlumTomatoSauce();
	}

	public createCheese(): Cheese {
		return new MozzarellaCheese();
    }
    
	public createVeggies(): Veggies[] {
		const veggies: Veggies[] = [new BlackOlives(), new Spinach(), new EggPlant()];
		return veggies;
	}

	public createPepperoni(): Pepperoni {
		return new SlicedPepperoni();
	}

	public createClams(): Clams {
		return new FrozenClam();
	}
 }
