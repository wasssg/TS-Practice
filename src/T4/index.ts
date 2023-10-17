import { Calculator } from "./Calculator";
export function funcT4() {
    let cal = new Calculator();
    let res1 = cal.add(1, 2);
    console.log(res1);
    let res2 = cal.add(1, "a");
    console.log(res2);
}
