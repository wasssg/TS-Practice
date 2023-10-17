export function hasWithTypes(
    classObject: object,
    propertyName: string,
    propertyType: any
) {
    let property = Reflect.get(classObject, propertyName);

    if (property !== undefined) {
        return property.constructor === propertyType;
    }
    return false;
}
