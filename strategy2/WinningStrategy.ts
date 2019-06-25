import { Strategy } from "./Strategy";
import { Hand } from "./Hand";

export class WinningStrategy implements Strategy {
    private random: number;
    private won: boolean = false;
    private prevHand: Hand;

    constructor() {
        this.setRandomNumber();
    }

    public setRandomNumber(): void {
        this.random = Math.floor(Math.random() * 3);
    }
    public nextHand(): Hand {
        if (!this.won) {
            this.setRandomNumber();
            this.prevHand = Hand.getHand(this.random);
        }
        return this.prevHand;
    }

    public study(win: boolean): void {
        this.won = win;
    }


}