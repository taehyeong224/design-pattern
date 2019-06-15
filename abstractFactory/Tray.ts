import { Item } from "./Item";

export abstract class Tray extends Item {
    protected tary: Item[] = [];

    constructor(caption: string) {
        super(caption);
    }

    public add(item: Item) {
        this.tary.push(item);
    }
}