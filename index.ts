import { MiniDuckSimulator } from "./stratgy/MiniDuckSimulator";
import { PizzaDrive } from "./factory/PizzaDrive";
import { TurkeyDrive } from "./adaptor/TurkeyDrive";
import { IteratorMain } from "./iterator/IteratorMain";
import { ProtoMain } from "./prototype/ProtoMain";
import { BuilderMain } from "./builder/BuilderMain";
import { MainFactory } from "./abstractFactory/MainFactory";
import { RemoteControlTest } from "./command/RemoteControlTest";
import { CoffeeStore } from "./decorator/CoffeStore";
import { Station } from "./observer/Station";
import { Play } from "./Play";
import { BridgeMain } from "./bridge/BridgeMain";

const draw = (fun: Play, name: string) => {
    const boarder = "==========";
    console.log(boarder);
    console.log(`==${name}==`);
    console.log(boarder);
    fun.main();
    console.log(boarder);
    console.log();
}

const mini = new MiniDuckSimulator();
draw(mini, "stratgy");

const pizzadrive = new PizzaDrive();
draw(pizzadrive, "factory");

const turkey = new TurkeyDrive();
draw(turkey, "adaptor");

const iter = new IteratorMain();
draw(iter, "iterator");

const proto = new ProtoMain();
draw(proto, "prototype");

const builderMain = new BuilderMain();
draw(builderMain, "builder")


const abf = new MainFactory();
draw(abf, "abstractFactory")

const command = new RemoteControlTest();
draw(command, "command");

const decorator = new CoffeeStore();
draw(decorator, "decorator");

const observer = new Station();
draw(observer, "observer");


const bridge = new BridgeMain();
draw(bridge, "bridge");
