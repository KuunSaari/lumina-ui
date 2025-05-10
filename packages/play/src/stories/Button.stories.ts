import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn, within, userEvent, expect, clearAllMocks } from '@storybook/test'

import { LuButton, LuButtonGroup } from 'lumina-ui'

type Story = StoryObj<typeof LuButton> & { argTypes?: ArgTypes }

const meta: Meta<typeof LuButton> = {
  title: 'Example/Button',
  component: LuButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'default'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    autofocus: {
      control: 'boolean',
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', ''],
    },
    icon: {
      control: { type: 'text' },
    },
    loadingIcon: {
      control: { type: 'text' },
    },
    useThrottle: {
      control: 'boolean',
    },
    throttleDuration: {
      control: { type: 'number' },
    },
  },
  args: { onClick: fn() },
}

const container = (val: string) => `
<div style="margin: 5px;">
  ${val}
</div>
`

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    type: 'primary',
    content: 'Button',
  },
  render: (args: any) => ({
    components: { LuButton },
    setup() {
      return { args }
    },
    template: container(
      '<lu-button v-bind="args">{{ args.content }}</lu-button>',
    ),
  }),
  play: async ({ canvasElement, args, step }: any) => {
    const canvas = within(canvasElement)

    args.useThrottle = false

    // 测试不使用节流
    await step('click btn without throttle', async () => {
      await userEvent.click(canvas.getByRole('button'))
      await userEvent.click(canvas.getByRole('button'))
    })
    expect(args.onClick).toHaveBeenCalledTimes(2) // 没有节流，应该触发两次点击事件

    // 重置点击次数
    clearAllMocks()

    // 更新为使用节流
    args.useThrottle = true

    // 测试使用节流
    await step('click btn with throttle', async () => {
      await userEvent.click(canvas.getByRole('button'))
      await userEvent.click(canvas.getByRole('button'))
      await new Promise((resolve) => setTimeout(resolve, 600)) // 等待超过节流时间
      await userEvent.click(canvas.getByRole('button'))
    })
    expect(args.onClick).toHaveBeenCalledTimes(2) // 使用节流，应该触发两次点击事件
  },
}

export const Circle: Story = {
  args: {
    icon: 'search',
  },
  render: (args: any) => ({
    components: { LuButton },
    setup() {
      return { args }
    },
    template: container(`
      <lu-button circle v-bind="args"/>
    `),
  }),
  play: async ({ canvasElement, args, step }: any) => {
    const canvas = within(canvasElement)
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'))
    })

    expect(args.onClick).toHaveBeenCalled()
  }
}

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'default'],
    },
    groupSize: {
      control: { type: 'select' },
      options: ['large', 'default', 'small'],
    },
    groupDisabled: {
      control: 'boolean',
    },
    content1: {
      control: { type: 'text' },
      defaultValue: 'Button1',
    },
    content2: {
      control: { type: 'text' },
      defaultValue: 'Button2',
    },
  },
  args: {
    round: true,
    content1: 'Button1',
    content2: 'Button2',
  },
  render: (args: any) => ({
    components: { LuButton, LuButtonGroup },
    setup() {
      return { args }
    },
    template: container(`
       <lu-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <lu-button v-bind="args">{{args.content1}}</lu-button>
         <lu-button v-bind="args">{{args.content2}}</lu-button>
       </lu-button-group>
    `),
  }),
  play: async ({ canvasElement, args, step }: any) => {
    const canvas = within(canvasElement)
    await step('click btn1', async () => {
      await userEvent.click(canvas.getByText('Button1'))
    })
    await step('click btn2', async () => {
      await userEvent.click(canvas.getByText('Button2'))
    })
    expect(args.onClick).toHaveBeenCalled()
  }
}

export default meta
