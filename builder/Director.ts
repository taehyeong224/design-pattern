import { Builder } from "./Builder";

export class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public construct(): void {
        this.builder.makeTitle("hi");
        this.builder.makeString("bye");
        this.builder.makeItems([
            "hihi", "any"
        ])
        this.builder.makeString("koko");
        this.builder.makeItems([
            "toto", "qoqo"
        ]);
        this.builder.close();
    }
}