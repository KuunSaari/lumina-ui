<script setup lang="ts">
import { createBem } from '@lumina-ui/utils'
import type { ButtonGroupProps } from './types'
import { provide, reactive, toRef } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './contants';

defineOptions({
  name: 'LuminaButtonGroup'
})

const props = defineProps<ButtonGroupProps>()

const bem = createBem('button-group')

provide(
  BUTTON_GROUP_CTX_KEY, 
  reactive({
    size: toRef(props,'size'),
    type: toRef(props, 'type'),
    disabled: toRef(props, 'disabled')
  })
)
</script>

<template>
  <div :class="[bem.getName()]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss' as *;
</style>