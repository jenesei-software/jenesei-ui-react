import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'

import { Tooltip as TooltipComponent, TooltipProps } from '.'

const meta: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
  title: 'Component/Tooltip'
}

export default meta

type Story = StoryObj<typeof TooltipComponent>

const TooltipWrapper: FC<TooltipProps> = props => {
  return (
    <TooltipComponent
      {...props}
      content={
        'Tootlip Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip? Tootlip? Tootlip? Tootlip? Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?'
      }
    >
      <Button genre={'black'} size={'medium'}>
        Tootlip?
      </Button>
    </TooltipComponent>
  )
}

export const Tooltip: Story = {
  render: args => <TooltipWrapper {...args} />,
  args: { placement: 'bottom-start' }
}
