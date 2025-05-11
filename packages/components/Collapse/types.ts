import { Ref } from 'vue'

export type CollapseItemName = string | number

export interface CollapseProps {
  /**
   * 面板列表
   */
  modelValue: CollapseItemName[]
  /**
   * 是否手风琴模式
   */
  accordion?: boolean
}

export interface CollapseItemProps {
  /**
   * 面板名称
   */
  name: CollapseItemName
  /**
   * 面板标题
   */
  title?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: CollapseItemName[]): void
  (e: 'change', value: CollapseItemName[]): void
}

export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>
  handleItemClick: (name: CollapseItemName) => void
}