import { QuackBehavior } from "./QuackBehavior";

export class Squack implements QuackBehavior {

    public quack(): void {
        console.log("삒삒.");
    }
}
