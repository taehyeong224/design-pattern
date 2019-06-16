import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "./Beverage";

export class Whip extends CondimentDecorator {

	private beverage: Beverage;

	constructor(beverage: Beverage) {
        super();
		this.beverage = beverage;
	}

	public getDescription(): string {
		return `${this.beverage.getDescription()}, 휘핑`;
    }
    
	public cost(): number {
		return 1000 + this.beverage.cost();
	}	

 }
