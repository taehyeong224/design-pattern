import { CheesePizza } from "../pizza/CheesePizza";
import { NYPizzaingredientFactory } from "../factory/NYPizzaingredientFactory";
import { Pizza } from "../interface/Pizza";
import { PizzaIngredientFactory } from "../factory/PizzaIngredientFactory";
import { PizzaStore } from "../interface/PizzaStore";
import { PepperoniPizza } from "../pizza/PepperoniPizza";
import { ClamPizza } from "../pizza/ClamPizza";
import { VeggiePizza } from "../pizza/VeggiePizza";

export class NYPizzaStore extends PizzaStore {

    public createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        const ingredientFactory: PizzaIngredientFactory = new NYPizzaingredientFactory();
        if (type === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
			pizza.name = ingredientFactory.NY_STYLE + " Cheese Pizza";
        }
        if (type === "peper") {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.name = ingredientFactory.NY_STYLE + " peper pizza"
        }
        if (type === "clam") {
            pizza = new ClamPizza(ingredientFactory);
            pizza.name = ingredientFactory.NY_STYLE + " clam pizza"
        }
        if (type === "veggie"){
            pizza = new VeggiePizza(ingredientFactory);
            pizza.name = ingredientFactory.NY_STYLE + " veggie pizza"
        }
        return pizza;

    }
}
