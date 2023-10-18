export type KFilter<T, U> = {
    [key in keyof T]: T[key] extends U ? key : never;
}[keyof T];
