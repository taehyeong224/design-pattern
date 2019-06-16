import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "./Beverage";

export class Mocha extends CondimentDecorator{

	private beverage: Beverage;

	constructor(beverage: Beverage) {
        super();
		this.beverage = beverage;
	}

	public getDescription(): string {
		return `${this.beverage.getDescription()}, 모카`;
    }
    
	public cost(): number {
		return 500 + this.beverage.cost();
	}	

 }
