/**
 * Function returns a key of an enum
 *
 * @param enumObj {enum}
 * @param value {value}
 */
function getEnumKey<T extends { [index: string]: string | number }>(
	enumObj: T,
	value: string | number
): keyof T | undefined {
	return Object.keys(enumObj).find(key => enumObj[key] === value) as keyof T | undefined
}

export default getEnumKey
