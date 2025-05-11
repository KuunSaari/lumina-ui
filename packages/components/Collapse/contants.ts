import { InjectionKey } from 'vue'
import { CollapseContext } from './types'

export const COLLAPSE_CTX_KEY: InjectionKey<CollapseContext> =
  Symbol('collapseContext')
