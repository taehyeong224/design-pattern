import { Dough } from "../interface/Dough";
import { Sauce } from "../interface/Sauce";
import { Cheese } from "../interface/Cheese";
import { Veggies } from "../interface/Veggies";
import { Pepperoni } from "../interface/Pepperoni";
import { Clams } from "../interface/Clams";

export interface PizzaIngredientFactory {

	NY_STYLE: string;
	
	createDough(): Dough;

	createSauce(): Sauce;

	createCheese(): Cheese;

	createVeggies(): Veggies[];

	createPepperoni(): Pepperoni;

	createClams(): Clams;
} 
