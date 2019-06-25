import { MallardDuck } from "./MallardDuck";
import { FlyNoWay } from "./FlyNoWay";
import { MuteQuack } from "./MuteQuack";
import { Play } from "../Play";

export class MiniDuckSimulator extends Play {

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
