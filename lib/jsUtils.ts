const isNotEmpty = <T>(arr: readonly T[]): boolean => Boolean(Array.isArray(arr) && arr.length)

export default isNotEmpty
