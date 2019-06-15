import {Iterator} from "./Interface";
import { GroupAbstrat } from "./GroupAbstract";

export class GroupIteratorAbstract<I extends GroupAbstrat<T, any>, T> implements Iterator {
    protected group: I
    protected index: number;

    constructor(group: I) {
        this.group = group;
        this.index = 0;
    }

    hasNext(): boolean {
        return this.index < this.group.getLength();
    }    
    next(): T {
        const item: T = this.group.getItem(this.index);
        this.index += 1;
        return item 
    }
}