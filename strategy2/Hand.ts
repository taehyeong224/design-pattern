export class Hand {
    public static HANDVALUE_GUU = 0; // 주먹
    public static HANDVALUE_CHO = 1; // 가위
    public static HANDVALUE_PAA = 2; // 보

    public static hand: Hand[] = [new Hand(Hand.HANDVALUE_GUU), new Hand(Hand.HANDVALUE_CHO), new Hand(Hand.HANDVALUE_PAA)];

    private static names: string[] = ["주먹", "가위", "보"];

    private handValue: number;

    constructor(hanValue: number) {
        this.handValue = hanValue;
    }

    public static getHand(hanValue: number): Hand {
        return this.hand[hanValue];
    }

    public isStrongerThan(h: Hand): boolean {
        return this.fight(h) === 1;
    }

    public isWeakerThan(h: Hand) {
        return this.fight(h) === -1;
    }

    private fight(h: Hand): number {
        if (this === h) {
            return 0;
        } else if ((this.handValue + 1) % 3 === h.handValue) {
            return 1;
        } else {
            return -1;
        }
    }

    public toString(): string {
        return Hand.names[this.handValue];
    }
}