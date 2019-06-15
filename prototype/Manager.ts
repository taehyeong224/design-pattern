import { Product } from "./Product";

interface HashMap {
    [key: string]: any
}
export class Manager {
    private showcase: HashMap = {};
    public register(name: string, proto: Product): void {
        this.showcase[name] = proto
    }
    public create(protoname: string): Product {
        const p: Product = this.showcase[protoname];
        if (p === undefined || p === null) {
            throw "p is not exist"
        }
        return p.createClone();
    }
}