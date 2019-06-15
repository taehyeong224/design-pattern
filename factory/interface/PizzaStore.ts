import { Pizza } from "./Pizza";

export abstract class PizzaStore {

	public orderPizza(type: string): Pizza {

		const pizza: Pizza = this.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza;
	}

	abstract createPizza(type: string): Pizza; //Pizza 인스턴스를 만드는 일은 팩토리 역할을 하는 메소드에서 맡아 처리
 }