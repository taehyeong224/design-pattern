import { Sauce } from "./Sauce";
import { Cheese } from "./Cheese";
import { Dough } from "./Dough";
import { Veggies } from "./Veggies";
import { Pepperoni } from "./Pepperoni";
import { Clams } from "./Clams";

export abstract class Pizza {
	name: string;
    sauce: Sauce;
    cheese: Cheese;
	dough: Dough;
	veggies: Veggies[];
	pepperoni: Pepperoni;
	clams: Clams;
	
    abstract prepare(): void
    
	bake(): void {
		console.log("Bake for 25 minutes at 350");
	}
	
	cut(): void {
		console.log("Cutting the pizza into diagonal slices");
	}
	
	box(): void {
		console.log("Place pizza in official PizzaStore box");
	}
	
	getname(): string {
		return this.name;
	}
}