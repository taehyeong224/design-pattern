import { Pizza } from "../interface/Pizza";
import { PizzaIngredientFactory } from "../factory/PizzaIngredientFactory";

export class PepperoniPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }
    
    public prepare(): void {
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }
}