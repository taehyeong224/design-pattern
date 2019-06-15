import { Tray } from "./Tray";

export class ListTray extends Tray {
    constructor(caption: string) {
        super(caption);
    }

    public makeHTML(): string {
        let str: string = "";

        str += "<li>\n";
        str += `${this.caption}\n`;
        str += `<ul>\n`;
        for (let item of this.tary) {
            str += item.makeHTML();
        }

        str += `</ul>\n`;
        str += `</li>\n`;
        return str;
    }

}