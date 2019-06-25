import { Player } from "./Player";
import { WinningStrategy } from "./WinningStrategy";
import { ProbStrategy } from "./ProbStrategy";
import { Hand } from "./Hand";

export class StrategyMain {
    public main(): void {
        const player1: Player = new Player("켁", new WinningStrategy());
        const player2: Player = new Player("엥", new ProbStrategy(3));

        for (let i = 0; i < 1000; i++) {
            const nextHand1: Hand = player1.nextHand();
            const nextHand2: Hand = player1.nextHand();
            if (nextHand1.isStrongerThan(nextHand2)) {
                console.log(`winner : ${player1.toString()}`)
                player1.win();
                player2.lose();
            } else if (nextHand2.isStrongerThan(nextHand1)) {
                console.log(`winner : ${player2.toString()}`);
                player1.lose();
                player2.win();
            } else {
                console.log("Even");
                player1.even();
                player2.even();
            }
        }

        console.log("Total")
        console.log(player1.toString());
        console.log(player2.toString());
    }
}
