import { Display } from "./Display";
import { StringDisplayImpl } from "./StringDisplayImpl";
import { CountDisplay } from "./CountDisplay";

export class BridgeMain {
    public main(): void {
        const d1: Display = new Display(new StringDisplayImpl("hello korea"));
        const d2: Display = new CountDisplay(new StringDisplayImpl("hello world"));
        const d3: CountDisplay = new CountDisplay(new StringDisplayImpl("hello ff"));

        d1.display();
        d2.display();
        d3.display();
        d3.multiDisplay(5);
    }
}