import { DisplayImpl } from "./DisplayImpl";

export class StringDisplayImpl extends DisplayImpl {
    private string: string;
    private width: number;

    constructor(string: string) {
        super();
        this.string = string;
        this.width = string.length;
    }

    public rawOpen(): void {
        this.printLine();
    }    
    
    public rawPrint(): void {
        console.log(`|${this.string}|`);
    }
    public rawClose(): void {
        this.printLine();
    }

    public printLine(): void {
        let str: string = "+";
        for (let i = 0; i < this.width; i++) {
            str += "-";
        }
        str += "+";
        console.log(str);
    }

}