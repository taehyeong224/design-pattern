import { Manager } from "./Manager";
import { MessageBox } from "./MessageBox";
import { Product } from "./Product";
import { UnderlinePen } from "./UnderlinePen";
import { Play } from "../Play";

export class ProtoMain extends Play {
    public main(): void {
        const manager: Manager = new Manager();
        const mbox: MessageBox = new MessageBox("*");
        const mbox2: MessageBox = new MessageBox("-");
        manager.register("hoho", mbox);
        manager.register("hoho2", mbox2);
        manager.register("hoho2", mbox);

        const pen: UnderlinePen = new UnderlinePen("ㅋ");
        manager.register("popo", pen);

        const p1: Product = manager.create("hoho");
        const p2: Product = manager.create("hoho2");
        const p3: Product = manager.create("popo");
        const p4: Product = manager.create("popo");
        // const p5: Product = manager.create("wfewfwef");

        p1.use("hehe");
        p2.use("keke")
        p3.use("qoqoqoqo");
        p4.use("aaaaa");
        // p5.use("qdwqwd");
        console.log("eq : ", p3 === p4, p3 == p4)
    }
}