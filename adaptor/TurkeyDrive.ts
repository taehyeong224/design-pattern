import { MallardDuck } from "./MallardDuck";
import { WildTurkey } from "./WildTurkey";
import { Duck } from "./Duck";
import { TurkeyAdapter } from "./TurkeyAdaptor";

export class TurkeyDrive {
    public main(): void {
        const duck: MallardDuck = new MallardDuck();
        const turkey: WildTurkey = new WildTurkey();

        const turkeyAdapter: Duck = new TurkeyAdapter(turkey);


        console.log("The turkey says...");
        turkey.gobble();
        turkey.fly();

        console.log("The Duck says...");
        this.testDuck(duck);
        console.log("The TurkeyAdapter says...");
        this.testDuck(turkeyAdapter);
    }

    testDuck(duck: Duck): void {
        duck.quack();
        duck.fly();
    }
}