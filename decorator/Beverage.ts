export abstract class Beverage {

    protected description: string = "Empty";

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;

}
