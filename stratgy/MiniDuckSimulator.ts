import { MallardDuck } from "./MallardDuck";
import { FlyNoWay } from "./FlyNoWay";
import { MuteQuack } from "./MuteQuack";

export class MiniDuckSimulator {

    public main():void {
        const mallard = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();

        mallard.setFlyBehavior(new FlyNoWay());
        mallard.performFly();
        
        mallard.setQuackBehavior(new MuteQuack());
        mallard.performQuack();

    }

}
