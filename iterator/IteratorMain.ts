import { PhoneGroup } from "./PhoneGroup";
import { Phone } from "./Phone";
import { PhoneGroupIterator } from "./PhoneGroupIterator";

export class IteratorMain {
    public main(): void {
        const phoneGroup: PhoneGroup = new PhoneGroup(5);
        phoneGroup.addItem(new Phone("gogo"));
        phoneGroup.addItem(new Phone("gogo2"));
        phoneGroup.addItem(new Phone("gogo3"));
        phoneGroup.addItem(new Phone("gogo4"));
        phoneGroup.addItem(new Phone("gogo5"));
        phoneGroup.addItem(new Phone("gogo6"));
        phoneGroup.addItem(new Phone("gogo7"));

        const phoneIterator: PhoneGroupIterator = phoneGroup.iterator(PhoneGroupIterator);
        console.log("phone group length : ", phoneGroup.getLength());
        while(phoneIterator.hasNext()) {
            const phone: Phone = phoneIterator.next();
            console.log("phone name : ", phone.name);
            console.log("=====================");
        }
    }
}