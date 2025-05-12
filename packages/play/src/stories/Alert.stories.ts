import type { StoryObj, Meta, ArgTypes } from '@storybook/vue3'
import { ref, watch } from 'vue'
import { fn } from '@storybook/test'
import { LuAlert, type AlertInstance } from 'lumina-ui'
import 'lumina-ui/dist/theme/Alert.css'
import { AlertProps } from 'lumina-ui'

type Story = StoryObj<typeof LuAlert> & { argTypes?: ArgTypes }

const meta: Meta<typeof LuAlert> = {
  title: 'Example/Alert',
  component: LuAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'info', 'danger']
    },
    effect: {
      control: 'select',
      options: ['light', 'dark']
    },
    center: {
      control: 'boolean'
    }
  },
  args: {
    onClose: fn()
  }
}

export const Default: Story & { args: AlertProps & { visible: boolean } } = {
  args: {
    title: '标题',
    description: '这是一段描述',
    type: 'success',
    effect: 'light',
    closable: true,
    showIcon: true,
    visible: true
  },
  render: (args) => ({
    components: { LuAlert },
    setup() {
      const alertRef = ref<AlertInstance>()
      watch(
        () => (args as any).visible,
        (val: boolean) => {
          if (val) {
            alertRef.value?.open()
          } else {
            alertRef.value?.close()
          }
        }
      )
      return { args, alertRef }
    },
    template: `
     <lu-alert ref="alertRef" v-bind="args"></lu-alert>
    `
  })
}

export default meta
