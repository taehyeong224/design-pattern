import { FlyBehavior } from "./FlyBehavior";
import { QuackBehavior } from "./QuackBehavior";

export abstract class Duck {

	flyBehavior: FlyBehavior;

	quackBehavior: QuackBehavior;



	public swim(): void{
		console.log("물에 떠있습니다.");
	}
	
	public abstract display(): void;

	public performQuack(): void {
		this.quackBehavior.quack();
	}

	

	public performFly(): void{
		this.flyBehavior.fly();
	}



    public setFlyBehavior(flyBehavior: FlyBehavior): void {
		this.flyBehavior = flyBehavior;
	}



	public setQuackBehavior(quackBehavior: QuackBehavior): void {
		this.quackBehavior = quackBehavior;
	}

 }