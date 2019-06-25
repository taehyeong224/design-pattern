import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyWithWings";
import { Quack } from "./Quack";

export class MallardDuck extends Duck {

    constructor() {
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    public display(): void {
        console.log("청둥오리 입니다.");
    }

} 
