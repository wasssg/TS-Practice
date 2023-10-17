function catchError() {
    return function (targetClass: any) {
        Object.getOwnPropertyNames(targetClass.prototype).forEach((v) => {
            if (
                targetClass.prototype[v] === targetClass.prototype.constructor
            ) {
                return;
            }
            const sourceFunc = targetClass.prototype[v];
            targetClass.prototype[v] = function (...args: any[]) {
                try {
                    return sourceFunc(...args);
                } catch (error) {
                    console.error("Error");
                }
            };
        });
    };
}

@catchError()
export class Calculator {
    public add(a: any, b: any): number {
        if (a < 0 || b < 0) {
            throw new Error();
        }
        return a + b;
    }
}
