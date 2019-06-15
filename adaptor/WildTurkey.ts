import { Turkey } from "./Turkey";

export class WildTurkey implements Turkey {
    gobble(): void {
        console.log("gobble")
    }    
    fly(): void {
        console.log("flyyy")
    }


}