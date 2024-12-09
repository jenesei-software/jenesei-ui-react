import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@components/button'

import { Tooltip, TooltipProps } from '.'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Component/Tooltip',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Tooltip>

const TooltipWrapper: FC<TooltipProps> = props => {
  return (
    <Tooltip
      {...props}
      content={
        'Tootlip Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip? Tootlip? Tootlip? Tootlip? Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?Tootlip?'
      }
    >
      <Button genre={'black'} size={'medium'}>
        Tootlip?
      </Button>
    </Tooltip>
  )
}

export const Default: Story = {
  render: args => <TooltipWrapper {...args} />,
  args: { placement: 'bottom-start' }
}