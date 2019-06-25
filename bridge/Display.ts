import { DisplayImpl } from "./DisplayImpl";

export class Display {
    private impl: DisplayImpl;
    
    constructor(impl: DisplayImpl) {
        this.impl = impl;
    }

    public open(): void {
        this.impl.rawOpen();
    }

    public print(): void {
        this.impl.rawPrint();
    }

    public close(): void {
        this.impl.rawClose();
    }

    public display(): void {
        this.open();
        this.print();
        this.close();
    }
}