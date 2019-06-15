import { Aggregate, GroupIteratorType } from "./Interface";
import { GroupIteratorAbstract } from "./GroupIteratorAbstract";

export abstract class GroupAbstrat<I, T extends GroupIteratorAbstract<any, I>> implements Aggregate<any, T> {
    
    protected items: I[];
    protected index: number;

    constructor(num: number) {
        this.items = new Array(num);
        this.index = 0;
    }

    public addItem(item: I): void {
        this.items[this.index] = item;
        this.index += 1;
    }

    public getLength(): number {
        return this.index;
    }

    public getItem(index: number): I {
        return this.items[index];
    }

    public iterator(GroupIteratorType: GroupIteratorType<any, T>): T {
        return new GroupIteratorType(this);
    }
}