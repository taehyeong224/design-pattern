import { MiniDuckSimulator } from "./stratgy/MiniDuckSimulator";
import { PizzaDrive } from "./factory/PizzaDrive";
import { TurkeyDrive } from "./adaptor/TurkeyDrive";
import { IteratorMain } from "./iterator/IteratorMain";
import { ProtoMain } from "./prototype/ProtoMain";
import { BuilderMain } from "./builder/BuilderMain";
import { MainFactory } from "./abstractFactory/MainFactory";

const mini = new MiniDuckSimulator();
mini.main();
console.log("=======")

const pizzadrive = new PizzaDrive();
pizzadrive.main();

console.log("=======")
const turkey = new TurkeyDrive();
turkey.main();

console.log("=========")
const iter = new  IteratorMain();
iter.main()


console.log("===========")
const proto = new ProtoMain();
proto.main();


console.log("===========")
const builderMain = new BuilderMain();
builderMain.main();

console.log("=---------===")
const abf = new MainFactory();
abf.main();