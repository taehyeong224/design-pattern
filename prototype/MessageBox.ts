import { Product } from "./Product";
import { clone } from "underscore";

export class MessageBox implements Product {
    private decochar: string;

    constructor(dechochar: string) {
        this.decochar = dechochar;
    }

    public use(s: string): void {
        const length = s.length;
        let str: string = "";
        for (let i = 0; i < length + 4; i++) {
            str += this.decochar
        }
        console.log(str)
        console.log(`${this.decochar}${s}${this.decochar}`);
        console.log(str)
        console.log("");
    }

    public createClone(): Product {
        let p: Product = null;
        try {
            p = clone(this);
        } catch (e) {
            console.error("clone error : ", e);
        }
        return p;
    }


}