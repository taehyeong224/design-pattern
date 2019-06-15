import { Product } from "./Product";
import { clone } from "underscore";

export class UnderlinePen implements Product {
    private ulchar: string;

    constructor(ulchar: string) {
        this.ulchar = ulchar;
    }

    public use(s: string): void {
        const length: number = s.length;
        let str: string = "";
        console.log(`"    ${s}      "`)
        for (let i = 0; i < length; i++) {
            str += this.ulchar;
        }
        console.log(str);
    }    
    
    createClone(): Product {
        let p: Product = null;
        try {
            p = clone(this);
        } catch (e) {
            console.error("e : ", e);
        }
        return p;
    }


}