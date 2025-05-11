<script setup lang="ts">
import { createBem, debugWarn } from '@lumina-ui/utils';
import type { CollapseEmits, CollapseItemName, CollapseProps } from './types'
import { ref, provide, watch, watchEffect } from 'vue'
import { COLLAPSE_CTX_KEY } from './contants'

const COMP_NAME = 'LuCollapse' as const

defineOptions({
  name: 'LuCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const bem = createBem('collapse')


const activeNames = ref(props.modelValue)

function handleItemClick(name: CollapseItemName) {
  let _activeNames = [...activeNames.value]

  if (props.accordion) {
    _activeNames = [_activeNames[0] === name ? '' : name]
    updateActiveNames(_activeNames)
    return
  }

  const index = _activeNames.indexOf(name)
  if (index > -1) {
    _activeNames.splice(index, 1)
  } else {
    _activeNames.push(name)
  }
  updateActiveNames(_activeNames)
}

function updateActiveNames(newValue: CollapseItemName[]) {
  activeNames.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}

watch(
  () => props.modelValue,
  (newValue) => updateActiveNames(newValue)
)

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'accordion mode can only support one item active')
  }
})

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
})
</script>

<template>
  <div :class="[bem.getName()]">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use './style.scss' as *;
</style>