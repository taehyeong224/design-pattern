import { QuackBehavior } from "./QuackBehavior";

export class MuteQuack implements QuackBehavior {

    public quack(): void {
        console.log("응 안울어.");
    }
}
