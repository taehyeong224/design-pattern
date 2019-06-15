import { GroupIteratorAbstract } from "./GroupIteratorAbstract";
import { GroupAbstrat } from "./GroupAbstract";

export interface Aggregate<I extends GroupAbstrat<any, any>, O extends GroupIteratorAbstract<any, any>> {
    iterator(type: GroupIteratorType<I, O>): O;
}
 
export interface Iterator {
    hasNext(): boolean;
    next(): {};
}

export interface GroupIteratorType<I extends GroupAbstrat<any, any>, O extends GroupIteratorAbstract<any, any>> {
    new (type: I): O
    // I: group
    // T: groupIterators
}