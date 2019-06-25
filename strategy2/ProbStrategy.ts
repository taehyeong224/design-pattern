import { Strategy } from "./Strategy";
import { Hand } from "./Hand";

export class ProbStrategy implements Strategy {
    private random: number;
    private prevHandValue: number = 0;
    private currentHandValue: number = 0;
    private history: number[][] = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];

    constructor(range: number) {
        this.setRandomNumber(range);
    }

    public setRandomNumber(range): void {
        this.random = Math.floor(Math.random() * range);
    }

    public getRandomNumber(range: number): number {
        return Math.floor(Math.random() * range);
    }

    public nextHand(): Hand {
        const bet = this.getRandomNumber(this.getSum(this.currentHandValue));
        let handValue: number = 0;
        if (bet < this.history[this.currentHandValue][0]) {
            handValue = 0;
        } else if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
            handValue = 1;
        } else {
            handValue = 2;
        }
        this.prevHandValue = this.currentHandValue;
        this.currentHandValue = handValue;
        return Hand.getHand(handValue);
    }   

    
    public getSum(hv: number): number {
        let sum: number = 0;
        for (let i = 0; i < 3; i++) {
            sum += this.history[hv][i];
        }
        return sum;
    }

    public study(win: boolean): void {
        if (win) {
            this.history[this.prevHandValue][this.currentHandValue]++;
        } else {
            this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
            this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
        }
    }


}