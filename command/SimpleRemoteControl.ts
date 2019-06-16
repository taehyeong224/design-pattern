import { Command } from "./Command";

export class SimpleRemoteControl {
    slot: Command;

    public setCommand(command: Command) {
        this.slot = command;
    }

    public buttonWasPressed() {
        this.slot.execute();
    }
}