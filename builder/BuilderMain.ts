import { TextBuilder } from "./TextBuilder";
import { Director } from "./Director";

export class BuilderMain {
    public main(): void {
        const textBuilder: TextBuilder = new TextBuilder();
        const director: Director = new Director(textBuilder);
        director.construct();
        const result = textBuilder.getResult();
        console.log(result);
    }
}