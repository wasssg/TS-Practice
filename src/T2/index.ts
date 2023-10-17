import { kArrayFunc } from "./ArrayExtend";
import { kMapFunc } from "./MapExtend";
export function funcT2() {
    let a1 = [3, 2, 3];
    let a2 = [1, 2, 3, 4, 5, 6];
    let a3 = [[1, 2], [[3, 4], 5], 6];
    let a4 = [5, 2, 3, 1, 9, 6];
    const myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"],
    ]);

    kArrayFunc();
    kMapFunc();
    a1.copyWithin(15, 8, 11);
    console.log(a1);
    a2.kCopyWithIn(15, 8, 11);
    console.log(a2);

    console.log(a1.kFilter((value) => value - 9 > 0));

    console.log(a1.kMap((value) => value / 2));
    console.log(a1.map((value) => value / 2));

    console.log(a2.kShift());
    console.log(a2);
    console.log(a2.kShift());
    console.log(a2);

    let a = a1.kUnShift(0);
    console.log(a);
    console.log(a1);

    a1.unshift(0);

    console.log(a1);
    a2.kReverse();
    console.log(a1.kReduce((a, b, c) => a + b + c, 0));

    console.log(a3.kFlat(2));

    console.log(a1.kFindIndex((value) => value > 1));
    console.log(a1.kFind((value) => value > 1));

    console.log(a1.kSome((value) => value > 1));

    console.log(a4.kSort((a, b) => 1 - 2));

    console.log(a2.kSplice(1, 3));
    console.log(a2);

    console.log(myMap.kKeys());
    console.log(myMap.kValues());
}
