import { FlyBehavior } from "./FlyBehavior";

export class FlyWithWings implements FlyBehavior{

    public fly(): void {
        console.log("난다!!");
    }

}