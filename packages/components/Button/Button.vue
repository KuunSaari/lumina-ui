<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import { type ButtonProps, type ButtonInstance, ButtonEmits } from './types'
import { BUTTON_GROUP_CTX_KEY } from './contants';
import { createBem } from '@lumina-ui/utils/bem'
import { throttle } from '@lumina-ui/utils'
import LuIcon from '../Icon/Icon.vue'

const bem = createBem('button')

defineOptions({
  name: 'LuButton'
})

console.log('Button')

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: false,
  throttleDuration: 500
})

const emits = defineEmits<ButtonEmits>()

const slots = defineSlots()
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const _ref = ref<HTMLButtonElement>()

const size = computed(() => ctx?.size ?? props?.size ?? '')
const type = computed(() => ctx?.type ?? props?.type ?? '')
const disabled = computed(() => ctx?.disabled || props?.disabled || false)
const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, {
  trailing: false
})

const iconStyles = computed(() => ({
  marginRight: slots.default ? '6px' : '0px'
}))

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type
})
</script>

<template>
  <component :is="tag" :autofocus="autofocus" :type="tag === 'button' ? nativeType : void 0" :class="[
    bem.getName(),
    type && bem.m(type),
    size && bem.m(size),
    bem.is('plain', plain),
    bem.is('round', round),
    bem.is('circle', circle),
    bem.is('disabled', disabled || loading),
    bem.is('loading', loading),
    bem.is('text', text),
    bem.is('bg', bg)
  ]" :disabled="disabled || loading ? true : void 0"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
    <template v-if="loading">
      <slot name="loading">
        <lu-icon :class="bem.e('loading-icon')" :icon="loadingIcon ?? 'spinner'" :style="iconStyles" size="1x" spin />
      </slot>
    </template>
    <lu-icon v-if="icon && !loading" :icon="icon" :style="iconStyles" size="1x" />
    <slot>

    </slot>
  </component>
</template>

<style lang="scss" scoped>
@use './style.scss' as *;
</style>