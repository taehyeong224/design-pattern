import { Link } from "./Link";

export class ListLink extends Link {

    constructor(caption: string, url: string) {
        super(caption, url);
    }

    public makeHTML(): string {
        return ` <li><a href="${this.url}>${this.caption}</a>"</li>\n`
    }

}