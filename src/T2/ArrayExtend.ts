declare global {
    interface Array<T> {
        kForEach(
            forEachCallback: (value: T, index: number, array: T[]) => void,
            thisArg?: any
        ): void;

        kConcat(concatArray: T[]): T[];

        kCopyWithIn(target: number, start: number, end?: number): T[];

        kFilter(
            filterCallback: (value: T, index: number, array: T[]) => boolean,
            thisArg?: any
        ): T[];

        kMap(
            mapCallbackfn: (value: T, index: number, array: T[]) => T,
            thisArg?: any
        ): T[];

        kShift(): T;

        kUnShift(value: T): number;

        kReduce(
            callback: (
                preValue: T,
                currValue: T,
                currIndex: number,
                array: T[]
            ) => T,
            initialValue: T
        ): T;

        kReverse(): T[];

        kFlat(depth: number): T[];

        kFindIndex(
            findIndexCallback: (value: T, index: number, arr: T[]) => boolean
        ): T;

        kFind(findCallback: (value: T, index: number, arr: T[]) => boolean): T;

        kSome(
            someCallback: (value: T, index: number, arr: T[]) => boolean
        ): boolean;

        kSort(sortCompare: (valueA: T, valueB: T) => number): T[];

        kSlice(start: number, end: number): T[];

        kSplice(start: number, deleteCount?: number, ...items: T[]): T[];
    }
}

export function kArrayFunc() {
    /**
     * @description 重写kForEach方法
     */
    Array.prototype.kForEach = function (callback, thisArg) {
        let length = this.length;
        for (let i = 0; i < length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };

    /**
     * @description 重写kConcat方法
     */
    Array.prototype.kConcat = function (concatArray) {
        let arr = this;
        arr.push(concatArray);
        return arr;
    };

    /**
     * @description 重写kCopyWithIn方法
     */
    Array.prototype.kCopyWithIn = function (target, start, end?) {
        let length = this.length;
        let arr = this;
        target = target > 0 ? target : target + length; //取倒数
        if (start >= length || target > length) {
            return arr;
        }
        if (end === undefined) {
            end = length;
        }
        end = end ?? length;
        let temp = [];
        let tempLength = end - start;
        for (let i = 0; i < tempLength; i++) {
            temp.push(arr[start + i]);
        }
        for (let i = 0; i < tempLength; i++) {
            if (i + target < length) {
                arr[target + i] = temp[i];
            }
        }
        return arr;
    };

    /**
     * @description 重写kFilter方法
     */
    Array.prototype.kFilter = function <T>(
        callBack1: (value: T, index: number, array: T[]) => boolean,
        thisArg?: any
    ) {
        let arr = this;
        let result: T[] = [];
        this.kForEach((value, index) => {
            if (callBack1.call(thisArg, value, index, arr)) {
                result.push(value);
            }
        });

        return result;
    };

    /**
     * @description 重写kMap方法
     */
    Array.prototype.kMap = function <T>(
        callback: (value: T, index: number, array: T[]) => T,
        thisArg?: any
    ): T[] {
        let result: T[] = [];
        this.kForEach((value, index) => {
            result.push(callback.call(thisArg, value, index, this));
        });
        return result;
    };

    /**
     * @description 重写kShift方法
     */
    Array.prototype.kShift = function () {
        if (this.length <= 0) {
            return undefined;
        }
        let arr = this;
        let firstItem = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        this.pop();
        return firstItem;
    };

    /**
     * @description 重写kUnShift方法
     */
    Array.prototype.kUnShift = function <T>(value: T): number {
        this.length++;
        let arr = [...this];
        this[0] = value;
        for (let i = 1; i < this.length; i++) {
            this[i] = arr[i - 1];
        }
        return this.length;
    };

    /**
     * @description 重写kReduce方法
     */
    Array.prototype.kReduce = function <T>(
        callback: (
            preValue: T,
            currValue: T,
            currIndex: number,
            array: T[]
        ) => T,
        initialValue: T
    ): T {
        let result = initialValue;
        let arr = [...this];
        for (let i = 0; i < this.length; i++) {
            result = callback(result, arr[i], i, arr);
        }
        return result;
    };

    /**
     * @description 重写kReverse方法
     */
    Array.prototype.kReverse = function <T>(): T[] {
        let arr = [...this];
        let result = [];
        for (let i = arr.length - 1, j = 0; i + 1 > 0; i--, j++) {
            result[j] = arr[i];
        }
        for (let i = 0; i < result.length; i++) {
            this[i] = result[i];
        }
        return this;
    };

    /**
     * @description 重写kFlat方法
     */
    Array.prototype.kFlat = function <T>(depth: number): T[] {
        let res: T[] = [];
        for (let item of this) {
            if (Array.isArray(item) && depth > 0) {
                res.push(...item.kFlat(depth - 1));
            } else {
                res.push(item);
            }
        }
        return res;
    };

    /**
     * @description 重写kFindIndex方法
     */
    Array.prototype.kFindIndex = function <T>(
        callback: (value: T, index: number, arr: T[]) => boolean
    ) {
        let res: number[] = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                res.push(i);
            }
        }
        return res[0];
    };

    /**
     * @description 重写kFind方法
     */
    Array.prototype.kFind = function <T>(
        callback: (value: T, index: number, arr: T[]) => boolean
    ) {
        let res: number[] = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                res.push(this[i]);
            }
        }
        return res[0];
    };

    /**
     * @description 重写kSome方法
     */
    Array.prototype.kSome = function <T>(
        callback: (value: T, index: number, arr: T[]) => boolean
    ): boolean {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                return true;
            }
        }
        return false;
    };

    /**
     * @description 重写kSort方法
     */
    Array.prototype.kSort = function <T>(
        sortCompare: (a: T, b: T) => number
    ): T[] {
        for (let i = 0; i < this.length - 1; i++) {
            if (sortCompare(this[i], this[i + 1])) {
                for (let j = i + 1; j < this.length; j++) {
                    if (this[i] > this[j]) {
                        let temp = this[i];
                        this[i] = this[j];
                        this[j] = temp;
                    }
                }
            }
        }
        return this;
    };

    /**
     * @description 重写kSlice方法
     */
    Array.prototype.kSlice = function <T>(start: number, end: number): T[] {
        if (start > end || start > this.length - 1) {
            return [];
        }

        let res = [];
        for (let i = start; i < end; i++) {
            res.push(this[i]);
        }
        return res;
    };

    /**
     * @description 重写kSplice方法
     */
    Array.prototype.kSplice = function <T>(
        start: number,
        deleteCount: number,
        ...items: T[]
    ): T[] {
        let deleteArr: T[] = [];
        let newArr: T[] = [];
        start = start < -this.length ? 0 : start;
        start = start < 0 ? start + this.length : start;
        let end =
            start + deleteCount > this.length
                ? this.length
                : start + deleteCount;
        if (start >= this.length) {
            deleteCount = 0;
            return [];
        }
        deleteCount = end - start;
        for (let i = 0; i < deleteCount; i++) {
            deleteArr[i] = this[start + i];
        }
        for (let i = 0; i < start; i++) {
            newArr.push(this[i]);
        }
        newArr.push(...items);
        for (let i = end; i < this.length; i++) {
            newArr.push(this[i]);
        }
        this.length = 0;
        newArr.forEach((v) => {
            this.push(v);
        });
        return deleteArr;
    };
}
