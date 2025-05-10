type ThrottleOptions = {
  leading?: boolean // 是否在节流开始时立即执行一次
  trailing?: boolean // 是否在节流结束时执行一次
}

/**
 * 节流函数，限制函数在指定时间内最多执行一次。
 * @template T - 被节流的函数类型，必须是一个函数。
 * @param func - 要被节流的函数。
 * @param wait - 节流的等待时间，单位为毫秒。
 * @param options - 节流的选项。
 * @param options.leading - 是否在节流开始时立即执行一次，默认为 `true`。
 * @param options.trailing - 是否在节流结束时执行一次，默认为 `true`。
 * @returns 返回一个节流后的函数，该函数的参数和返回值类型与原函数相同。
 * @example
 * // 示例用法
 * const throttledFunc = throttle(() => console.log('Hello'), 1000);
 * throttledFunc(); // 立即执行
 * throttledFunc(); // 1秒内不会再次执行
 * setTimeout(throttledFunc, 1500); // 1.5秒后执行
 * @example
 * // 使用选项
 * const throttledFuncWithOptions = throttle(
 *   () => console.log('Hello'),
 *   1000,
 *   { leading: false, trailing: true }
 * );
 * throttledFuncWithOptions(); // 1秒后执行
 * throttledFuncWithOptions(); // 1秒后再次执行
 * @remarks
 * 节流函数在处理高频事件（如窗口缩放、滚动等）时非常有用，可以避免函数被频繁调用，从而提高性能。
 * @see debounce - 与节流函数类似，但有不同行为的防抖函数。
 */
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  options?: ThrottleOptions,
): (...args: Parameters<T>) => void {
  let timeout: number | null = null
  let lastArgs: Parameters<T> | null = null
  let lastThis: ThisParameterType<T> | null = null
  let lastCallTime: number | null = null

  const shouldInvoke = () => {
    const now = Date.now()
    if (lastCallTime === null) {
      return options?.leading !== false
    }
    const timeSinceLastCall = now - lastCallTime
    return timeSinceLastCall >= wait
  }

  const trailingCall = () => {
    timeout = null
    if (!options?.trailing === false) {
      return
    }
    if (lastArgs === null) {
      return
    }
    lastCallTime = Date.now()
    // 确保 lastArgs 不是 null
    if (lastArgs !== null) {
      func.apply(lastThis, lastArgs)
    }
    lastArgs = null
    lastThis = null
  }

  const callFunc = () => {
    lastCallTime = Date.now()
    // 确保 lastArgs 不是 null
    if (lastArgs !== null) {
      func.apply(lastThis, lastArgs)
    }
    lastArgs = null
    lastThis = null
    if (timeout !== null) {
      window.clearTimeout(timeout)
    }
    timeout = window.setTimeout(trailingCall, wait)
  }

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    lastArgs = args
    lastThis = this
    if (shouldInvoke()) {
      callFunc()
    } else if (timeout === null && options?.trailing !== false) {
      timeout = window.setTimeout(trailingCall, wait)
    }
  }
}

export default throttle
