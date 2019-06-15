import { Page } from "./Page";

export class ListPage extends Page {

    constructor(title: string, author: string) {
        super(title, author);
    }

    public makeHTML(): string {
        let str: string = "";
        str += `
            <html><head><title>${this.title}</title></head>
            <body>
            <h1>${this.title}</h1>
            <ul>
        `;
        for (let item of this.content) {
            str += item.makeHTML();
        };
        str += `
           </ul>
            <tr><address>${this.author}</address>
            </body></html>
        `
        return str;
    }

}