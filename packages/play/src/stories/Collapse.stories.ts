import type { Meta, StoryObj } from '@storybook/vue3'
import { LuCollapse, LuCollapseItem } from 'lumina-ui' 


import 'lumina-ui/dist/theme/Collapse.css'

type Story = StoryObj<typeof LuCollapse>

const meta: Meta<typeof LuCollapse> = {
  title: 'Example/Collapse',
  component: LuCollapse,
  subcomponents: { LuCollapseItem },
  tags: ['autodocs']
}

export const Default: Story = {
  render: (args: any) => ({
    components: {
      LuCollapse,
      LuCollapseItem
    },
    setup() {
      return {
        args
      }
    },
    template: `
    <lu-collapse v-bind="args">
      <lu-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </lu-collapse-item>
      <lu-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </lu-collapse-item>
      <lu-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </lu-collapse-item>
    </lu-collapse>
    `
  }),
  args: {
    accordion: true,
    modelValue: ['a']
  }
}

export default meta
