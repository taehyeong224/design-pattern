import { PizzaStore } from "./interface/PizzaStore";
import { NYPizzaStore } from "./store/NYPizzaStore";
import { ChicagoPizzaStore } from "./store/ChicagoPizzaStore";
import { Pizza } from "./interface/Pizza";

export class PizzaDrive {
    public main(): void {
        const nyStore: PizzaStore = new NYPizzaStore();
		const chicagoStore: PizzaStore = new ChicagoPizzaStore();

		const nySytpePizza: Pizza = nyStore.orderPizza("cheese");
        console.log(nySytpePizza.getname());


		const chicagoStypePizza: Pizza = chicagoStore.orderPizza("cheese");
		console.log(chicagoStypePizza.getname());
    }
}