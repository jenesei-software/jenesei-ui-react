import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'
import { Tooltip as TooltipComponent, TooltipProps } from '@local/components/tooltip'

const meta: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
  title: 'Component/Tooltip'
}

export default meta

type Story = StoryObj<typeof TooltipComponent>

const TooltipWrapper: FC<TooltipProps> = props => {
  return (
    <Stack sx={{ default: { gap: '8px', padding: '10px' } }}>
      <TooltipComponent
        {...props}
        placement="bottom-end"
        maxHeight="200px"
        maxWidth="200px"
        size="large"
        genre="product"
        content={
          'Tootlip Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip? Tootlip? Tootlip? Tootlip? Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip? Tootlip? Tootlip? Tootlip? Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?'
        }
      >
        <Button genre={'product'} size={'medium'}>
          Tootlip?
        </Button>
      </TooltipComponent>
      <TooltipComponent
        {...props}
        placement="top-start"
        maxHeight="200px"
        maxWidth="200px"
        content={
          'Test Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip? Tootlip? Tootlip? Tootlip? Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?'
        }
      >
        <Button genre={'black'} size={'medium'}>
          Tootlip?
        </Button>
      </TooltipComponent>
      <TooltipComponent
        {...props}
        placement="bottom"
        content={
          'Check Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip? Tootlip? Tootlip? Tootlip? Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?'
        }
      >
        <Button genre={'black'} size={'medium'}>
          Tootlip?
        </Button>
      </TooltipComponent>
      <TooltipComponent {...props} placement="bottom" content={'Tootlip'}>
        <Button genre={'black'} size={'medium'}>
          Tootlip?
        </Button>
      </TooltipComponent>
    </Stack>
  )
}

export const Tooltip: Story = {
  render: args => <TooltipWrapper {...args} />,
  args: { placement: 'bottom-start' }
}
