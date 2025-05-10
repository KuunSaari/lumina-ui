<script setup lang="ts">
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from '@lumina-ui/utils'
import { createBem } from '@lumina-ui/utils'
import { computed } from 'vue'

defineOptions({
  name: 'LuIcon',
  inheritAttrs: false
})

const bem = createBem('icon')
const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => ({
  color: props.color ?? void 0
}))
</script>

<template>
  <i :class="[bem.getName(), type && bem.m(type)]" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>