import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { Dough } from "../interface/Dough";
import { Sauce } from "../interface/Sauce";
import { Cheese } from "../interface/Cheese";
import { Veggies } from "../interface/Veggies";
import { Pepperoni } from "../interface/Pepperoni";
import { Clams } from "../interface/Clams";
import { ThinCrustdough } from "../stuff/dough/ThinCrustdough";
import { MarinaraSauce } from "../stuff/sauce/MarinaraSauce";
import { SlicedPepperoni } from "../stuff/pepperoni/SlicedPepperoni";
import { Farlic } from "../stuff/veggies/Farlic";
import { Onion } from "../stuff/veggies/Onion";
import { Mushroom } from "../stuff/veggies/Mushroom";
import { RedPepper } from "../stuff/veggies/RedPepper";
import { Freshclams } from "../stuff/clams/Freshclams";
import { ReggianoCheese } from "../stuff/cheese/ReggianoCheese";

export class NYPizzaingredientFactory implements PizzaIngredientFactory {
    NY_STYLE: string = "NY";
    
    public createDough(): Dough {
        return new ThinCrustdough();
    }

    public createSauce(): Sauce {
        return new MarinaraSauce();
    }

    public createCheese(): Cheese {
        return new ReggianoCheese();
    }

    public createVeggies(): Veggies[] {
        return  [new Farlic(), new Onion(), new Mushroom(), new RedPepper()];
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClams(): Clams {
        return new Freshclams();
    }
}
