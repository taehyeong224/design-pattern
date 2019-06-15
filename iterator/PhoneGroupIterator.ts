import { GroupIteratorAbstract } from "./GroupIteratorAbstract";
import { PhoneGroup } from "./PhoneGroup";
import { Phone } from "./Phone";

export class PhoneGroupIterator extends GroupIteratorAbstract<PhoneGroup, Phone> {
    constructor(group: PhoneGroup) {
        super(group);
    }
}