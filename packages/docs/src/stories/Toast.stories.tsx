import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Box } from '@baitasolucoes-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    callAction: 'Abrir Toast',
    content: 'Esse é o conteúdo',
    title: 'Sucesso!',
    duration: 3000,
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
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
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
