import { Turkey } from "./Turkey";
import { Duck } from "./Duck";

export class TurkeyAdapter implements Duck {

    turkey: Turkey;

    constructor (turkey: Turkey) {
        this.turkey = turkey;
    }

    public quack(): void {
        this.turkey.gobble();
    }


    public fly(): void {
        this.turkey.fly();
    }

}
