import { Pizza } from "../interface/Pizza";
import { PizzaIngredientFactory } from "../factory/PizzaIngredientFactory";

export class VeggiePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;
    
    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        this.veggies = this.ingredientFactory.createVeggies();
    }

}