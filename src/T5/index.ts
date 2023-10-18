import { Example } from "./Example";
import { hasWithTypes } from "./Reflect";

export function funcT5() {
    console.log("-------------------第五题----------------------");
    let example1 = new Example();

    console.log(hasWithTypes(example1, "name", String));
    console.log(hasWithTypes(example1, "testString", String));
    console.log(hasWithTypes(example1, "testNumber", Number));
    console.log(hasWithTypes(example1, "testFunc", Function));
    console.log(hasWithTypes(example1, "test", Function));
}
