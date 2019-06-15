import { Duck } from "./Duck";

export class MallardDuck implements Duck {
    quack(): void {
        console.log("quack")
    }    
    
    fly(): void {
        console.log("fly")
    }
}