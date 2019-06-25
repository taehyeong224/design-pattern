import { Hand } from "./Hand";

export interface Strategy {
    nextHand(): Hand;
    study(win: boolean): void;
}