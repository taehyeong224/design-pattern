import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {

	public abstract getDescription(): string;

 }
