import { Button, ButtonProps } from '@baitasolucoes-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      type: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
}
