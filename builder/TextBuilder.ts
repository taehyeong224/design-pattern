import { Builder } from "./Builder";

export class TextBuilder extends Builder {
    private buffer: string[] = [];

    makeTitle(title: string): void {
        this.buffer.push("==============\n");
        this.buffer.push(`[${title}]\n`);
        this.buffer.push("\n");
    }    
    makeString(str: string): void {
        this.buffer.push(`ㅁ${str}\n`);
        this.buffer.push("\n");
    }
    makeItems(items: string[]): void {
        for (let item of items) {
            this.buffer.push(`ㅇ${item}\n`);
        }
        this.buffer.push("\n");
    }
    close(): void {
        this.buffer.push("=============\n");
    }

    public getResult(): string {
        return this.buffer.toString().replace(/,/gi, "");;
    }
}