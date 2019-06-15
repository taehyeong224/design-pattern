import { PizzaStore } from "../interface/PizzaStore";
import { Pizza } from "../interface/Pizza";
import { PizzaIngredientFactory } from "../factory/PizzaIngredientFactory";
import { ChicagoPizzaingredientFactory } from "../factory/ChicagoPizzaingredientFactory";
import { CheesePizza } from "../pizza/CheesePizza";
import { PepperoniPizza } from "../pizza/PepperoniPizza";
import { ClamPizza } from "../pizza/ClamPizza";
import { VeggiePizza } from "../pizza/VeggiePizza";

export class ChicagoPizzaStore extends PizzaStore {

    public createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        const ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaingredientFactory();
        if (type === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.name = ingredientFactory.NY_STYLE + " cheese";
        }
        if (type === "peper") {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.name = ingredientFactory.NY_STYLE + " peper";
        }
        if (type === "clam") {
            pizza = new ClamPizza(ingredientFactory);
            pizza.name = ingredientFactory.NY_STYLE + " clam";
        }
        if (type === "veggie") {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.name = ingredientFactory.NY_STYLE + " veggie";
        }
        return pizza;
    }

} 
