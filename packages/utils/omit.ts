/**
 * 从对象中移除指定的键，返回一个新的对象。
 *
 * @template T - 源对象的类型。
 * @template K - 需要移除的键的类型，必须是 T 的键。
 * @param obj - 源对象。
 * @param keys - 需要移除的键的数组。
 * @returns 返回一个新的对象，其中移除了指定的键。
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 }
 * const result = omit(obj, ['b'])
 * console.log(result) // { a: 1, c: 3 }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): OmitKeys<T, K> {
  // 创建一个空对象，用于存储结果
  const result = {} as OmitKeys<T, K>

  // 遍历源对象的所有键
  for (const key in obj) {
    // 检查当前键是否是对象自身的属性，并且不在需要移除的键数组中
    if (obj.hasOwnProperty(key) && !keys.includes(key as any)) {
      // 将当前键的值复制到结果对象中
      (result as any)[key] = obj[key]
    }
  }

  // 返回结果对象
  return result
}

// 定义 OmitKeys 类型，用于描述移除指定键后的对象类型
type OmitKeys<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

export default omit