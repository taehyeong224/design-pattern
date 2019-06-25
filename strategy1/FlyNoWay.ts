import { FlyBehavior } from "./FlyBehavior";

export class FlyNoWay implements FlyBehavior {
    public fly(): void {
        console.log("날지못해요.");
    }

}
