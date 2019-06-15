import { Item } from "./Item";

export abstract class Page {
    protected title: string;
    protected author: string;
    protected content: Item[] = [];

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public add(item: Item): void {
        this.content.push(item);
    }

    public output(): void {
        try {
            const fileName: string = this.title + ".html";
            const str: string = this.makeHTML();
            console.log(`${fileName} 을 작성했습니다.`);
            console.log("내용은")
            console.log(str);
        } catch (e) {
            console.error(e);
        }
    }

    public abstract makeHTML(): string;
}