import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {

    constructor() {
        super();
        this.description = "다크 로스트";
    }
	public cost(): number {
		return 4500;
	}

 }