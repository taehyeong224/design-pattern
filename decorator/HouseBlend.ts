import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage{

    constructor() {
        super();
        this.description = "하우스블렌드";
    }

	public cost(): number {
		return 2000;
	}
 }