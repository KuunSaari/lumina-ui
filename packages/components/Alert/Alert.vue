<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { createBem, typeIconMap } from '@lumina-ui/utils'
import LuButton from '../Button/Button.vue'
import LuIcon from '../Icon/Icon.vue'
import type { AlertProps, AlertEmits, AlertInstance } from './types'

defineOptions({
  name: 'LuAlert'
})

const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  title: 'Message',
  type: 'info',
  closable: true
})

const bem = createBem('alert')
const emits = defineEmits<AlertEmits>()
const slots: any = useSlots()

const visible = ref(true)


const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')

function close() {
  visible.value = false
  emits('close')
}

function open() {
  visible.value = true
}

defineExpose<AlertInstance>({
  close,
  open
})


</script>
<template>
  <transition name="alert-fade">
    <div role="alert" v-show="visible" :class="[
      bem.getName(),
      bem.modifier(props.effect),
      bem.modifier(props.type),
      bem.is('text-center', center),
      bem.is('with-description', !!slots.default?.() || !!props.description)
    ]">
      <div :class="[
        bem.e('content')
      ]">
        <span :class="[bem.e('title'), bem.e('text')]">
          <LuIcon v-if="showIcon" :class="bem.e('icon')" :icon="iconName" />
          <span>
            <slot name="title">
              {{ title }}
            </slot>
          </span>
        </span>
        <span :class="[bem.e('description'), bem.e('text')]">
          <slot>
            {{ description }}
          </slot>
        </span>
      </div>
      <div :class="bem.e('buttons')">
        <LuButton :class="[bem.e('close')]" v-if="closable" icon="xmark" @click.stop="close" />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@use './style.scss' as *;
</style>