import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button, Box } from '@baitasolucoes-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: 'Descrição do Tooltip',
    children: <Button>Abrir Tooltip</Button>,
  },
  argTypes: {
    side: {
      options: ['bottom', 'top', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 200,
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}

export const Bottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom',
  },
}
export const Top: StoryObj<TooltipProps> = {
  args: {
    side: 'top',
  },
}
export const Left: StoryObj<TooltipProps> = {
  args: {
    side: 'left',
  },
}
export const Right: StoryObj<TooltipProps> = {
  args: {
    side: 'right',
  },
}
