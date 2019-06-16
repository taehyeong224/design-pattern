import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { Light } from "./Light";
import { LightOnCommand } from "./LightOnCommand";
import { Play } from "../Play";

export class RemoteControlTest extends Play {
    public main(): void {
        const remote: SimpleRemoteControl = new SimpleRemoteControl();
        const light: Light = new Light();
        const lightOn: LightOnCommand = new LightOnCommand(light);
        remote.setCommand(lightOn);
        remote.buttonWasPressed();
    }
}