import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import { withInstall } from '@lumina-ui/utils'

export const LuCollapse = withInstall(Collapse)
export const LuCollapseItem = withInstall(CollapseItem)

export * from './types'