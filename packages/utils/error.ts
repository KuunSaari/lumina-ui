class LuminaUIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'LuminaUIError'
  }
}

export function throError(scope: string, message: string) {
  throw new LuminaUIError(`[${scope}]:${message}`)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof scope === 'string') {
      console.warn(new LuminaUIError(`[${scope}]:${message}`))
    } else {
      console.warn(scope)
    }
  }
}


export function createDebugWarnMessage(scope: string, message?: string): string | void {
  if (process.env.NODE_ENV !== 'production') {
    let err = new LuminaUIError(`[${scope}]:${message}`)
    return `[${err.name}: ${err.message}]`
  }
}
