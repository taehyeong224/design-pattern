import { QuackBehavior } from "./QuackBehavior";

export class Quack implements QuackBehavior {

    public quack(): void {
        console.log("꿱꿱.");
    }
}
