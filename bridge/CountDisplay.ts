import { Display } from "./Display";
import { DisplayImpl } from "./DisplayImpl";

export class CountDisplay extends Display {
    constructor(impl: DisplayImpl) {
        super(impl);
    }

    public multiDisplay(times: number): void {
        this.open();
        for (let i = 0; i < times; i++) {
            this.print();
        }
        this.close();
    }
}