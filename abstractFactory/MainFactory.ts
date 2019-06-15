import { Factory } from "./Factory";
import { Link } from "./Link";
import { Tray } from "./Tray";
import { Page } from "./Page";
import { ListFactory } from "./ListFactory";

export class MainFactory {
    public main(): void {
        const factory: Factory = Factory.getFactory(ListFactory);

        const joins: Link = factory.createLink("안녕", "https://naver.com");
        const ggg: Link = factory.createLink("안녕ggg", "https://google.com");

        const aaa: Link = factory.createLink("aaa", "https://aaa.com");
        const bbb: Link = factory.createLink("bbb", "https://bbb.com");



        const tray: Tray = factory.createTray("ttt");
        tray.add(joins);
        tray.add(ggg);

        const tray2: Tray = factory.createTray("ooo");
        tray2.add(aaa);
        tray2.add(bbb);

        const page: Page = factory.createPage("llinkpage", "ssss");
        page.add(tray);
        page.add(tray2);
        page.output();
    }
}