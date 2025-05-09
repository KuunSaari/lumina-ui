import type { InjectionKey } from 'vue'
import type { ButtonGroupContext } from 'lumina-ui'

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> =
  Symbol('buttonGroupContext')
