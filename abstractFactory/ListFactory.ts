import { Factory } from "./Factory";
import { ListLink } from "./ListLink";
import { ListTray } from "./ListTray";
import { ListPage } from "./ListPage";

export class ListFactory extends Factory {
    public createLink(caption: string, url: string): import("./Link").Link {
        return new ListLink(caption, url);
    }    

    public createTray(caption: string): import("./Tray").Tray {
        return new ListTray(caption);
    }
    public createPage(title: string, author: string): import("./Page").Page {
        return new ListPage(title, author);
    }


}