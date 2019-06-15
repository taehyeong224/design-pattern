import { Link } from "./Link";
import { Tray } from "./Tray";
import { Page } from "./Page";

export abstract class Factory {
    public static getFactory<T>(factoryType: FactoryType<T>): Factory {
        let factory: Factory = null;
        try {
            factory = <any>new factoryType();
        } catch (e) {
            console.error(e);
        }
        return factory;
    }

    public abstract createLink(caption: string, url: string): Link;
    public abstract createTray(caption: string): Tray;
    public abstract createPage(title: string, author: string): Page;
}

declare type FactoryType<T> = {
    new (): T;
};
