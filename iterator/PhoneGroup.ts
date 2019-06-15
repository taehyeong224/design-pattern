import { GroupAbstrat } from "./GroupAbstract";
import { Phone } from "./Phone";
import { PhoneGroupIterator } from "./PhoneGroupIterator";

export class PhoneGroup extends GroupAbstrat<Phone, PhoneGroupIterator> {
}