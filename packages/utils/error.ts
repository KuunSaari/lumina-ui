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
    if (typeof scope === 'object' && scope instanceof Error) {
      console.warn(scope)
    } else {
      new LuminaUIError(`[${scope}]:${message}`)
    }
  }
}
