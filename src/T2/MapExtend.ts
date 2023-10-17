declare global {
    interface Map<K, V> {
        kKeys(): IterableIterator<K>;
        kValues(): IterableIterator<V>;
    }
}
export function kMapFunc() {
    /**
     * @description 重写 keys 方法
     */
    Map.prototype.kKeys = function <K>(): IterableIterator<K> {
        let keys: K[] = [];
        this.forEach((_value, key) => {
            keys.push(key);
        });
        return keys[Symbol.iterator]();
    };

    /**
     * @description 重写 values 方法
     */
    Map.prototype.kValues = function <V>(): IterableIterator<V> {
        let map = this;
        let values: V[] = [];
        map.forEach((value, _key) => {
            values.push(value);
        });
        return values[Symbol.iterator]();
    };
}
