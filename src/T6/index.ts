import { KFilter } from "./Filter";
export function funcT6() {
    console.log("-------------------第六题----------------------");

    type fruit = "apple" | "banana" | "orange";
    type fruits = ["apple", "banana", "orange", "ssss"];
    type res = KFilter<fruit, fruits>;
}
