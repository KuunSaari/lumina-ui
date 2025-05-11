<script setup lang="ts">
import { createBem } from '@lumina-ui/utils'
import type { CollapseItemProps } from './types'
import { inject, computed } from 'vue'
import { COLLAPSE_CTX_KEY } from './contants'
import LuIcon from '../Icon/Icon.vue'
import transitionEvents from './transitionEvents'

defineOptions({
  name: 'LuCollapseItem'
})

const props = defineProps<CollapseItemProps>()
const bem = createBem('collapse-item')
const ctx = inject(COLLAPSE_CTX_KEY, void 0)
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name))

function handleClick() {
  if (props.disabled) return
  ctx?.handleItemClick(props.name)
}
</script>

<template>
  <div :class="[
    bem.getName(),
    bem.is('disabled', disabled),
    bem.is('active', isActive)
  ]">
    <div :class="[
      bem.e('header'),
      bem.is('disabled', disabled),
      bem.is('active', isActive)
    ]" :id="`item-header-${name}`" @click="handleClick">
      <span :class="bem.e('title')">
        <slot name="title">{{ title }}</slot>
      </span>
      <lu-icon icon="angle-right" :class="[bem.e('header-angle')]" />
    </div>
    <transition name="collapse-slide" v-on="transitionEvents">
      <div :class="[bem.e('wapper')]" v-show="isActive">
        <div :class="[bem.e('content')]" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@use './style.scss' as *;
</style>