import { DeepReadonly } from "./DeepReadonly";
import { Person } from "./Person";
export function funcT7() {
    console.log("-------------------第七题----------------------");

    let p1: Person = { name: "xxxx", address: { city: "XXXX" } };
    console.log(p1.name);
    console.log(p1.address.city);
    p1.address.city = "aaaaa"; // 可以改变
    console.log(p1.address.city);
    // Readonly
    type PersonReadonly = DeepReadonly<Person>;
    let pr1: PersonReadonly = { name: "ssss", address: { city: "SSSS" } };
    console.log(pr1.name);
    console.log(pr1.address.city);
    // p1.name="ssss" // 改变报错
}
