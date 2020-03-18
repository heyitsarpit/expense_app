/**
 * Returns true when the array is not empty
 */
export const isNotEmpty = <T>(arr: readonly T[]): boolean =>
  Boolean(Array.isArray(arr) && arr.length)

/**
 * Returns a flat version of an object
 * ```js
 * {
 *   key1: { a: { b: { c: 2 }, p: {c:"value@"} }, x: { y: { z: "value!" } } }
 * }
 * // Will become -->
 * {
 *   "key1:a:b:c": 2,
 *   "key1:a:p:c": "value@",
 *   "key1:x:y:z": "value!"
 * }
 * ```
 */
export const makeFlat = (obj: any, prefix = ''): any => {
  const KeyValueArray = Object.entries(obj)

  const FlatKeyValueArray = KeyValueArray.flatMap(([key, value]) =>
    Object(value) === value ? makeFlat(value, prefix + key + ':') : [[prefix + key, value]]
  )

  return Object.fromEntries(FlatKeyValueArray)
}
